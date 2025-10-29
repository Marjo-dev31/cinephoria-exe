import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { FormComponent } from '../../../shared/ui/form/form.component';
import { DynamicControl } from '../../../shared/models/form.interface';
import { Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RoomService } from '../../../shared/services/room.service';
import { IncidentService } from '../../../shared/services/incident.service';
import { IncidentFormInterface } from '../../models/incident.interface';
import { RoomInterface } from '../../../shared/models/room.interface';

@Component({
  selector: 'app-report',
  imports: [FormComponent],
  template: ` <div class="pt-40 ml-72 flex flex-col items-center">
    <h1 class="font-roboto text-6xl text-center my-6 border-2 bg-seasalt p-2 rounded-lg">
      Déclarer un incident
    </h1>
    <app-form
      [formModelConfig]="formModelConfig"
      (outputForm)="addIncident($event)"
      class=" rounded-lg w-96 border-2 border-darkblue bg-seasalt"
    />
  </div>`,
})
export class ReportClaim implements OnInit {
  private readonly roomService = inject(RoomService);
  private readonly incidentService = inject(IncidentService);
  private readonly destroyRef = inject(DestroyRef);
  formModelConfig: DynamicControl[] = [];
  rooms = signal<RoomInterface[]>([]);

  addIncident(incident: IncidentFormInterface) {
    const incidentAtRoom = +incident.room.split(' ')[1];
    const incidentAtCinema = incident.room.split(' ')[0];
    const getRoom = this.rooms().find(
      (room) => room.number === incidentAtRoom && room.cinema.city === incidentAtCinema,
    );
    if (getRoom) {
      const newIncident = {
        description: incident.description,
        date: incident.date,
        room: getRoom ?? '',
      };
      this.incidentService
        .createIncident(newIncident)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe();
    }
  }

  ngOnInit(): void {
    this.roomService
      .getAllRooms()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((rooms) => {
        this.rooms.set(rooms);
        const roomOptions = rooms.map((room) => `${room.cinema.city} ${room.number}`);
        this.formModelConfig = [
          {
            controlKey: 'room',
            formFieldType: 'select',
            selectOptions: roomOptions,
            label: 'Sélectionner une salle',
            validators: [Validators.required],
          },
          {
            controlKey: 'description',
            formFieldType: 'textarea',
            label: "Décrivez l'incident",
            validators: [Validators.required],
          },
          {
            controlKey: 'date',
            formFieldType: 'input',
            inputType: 'date',
            label: 'Date',
            validators: [Validators.required],
          },
        ];
      });
  }
}

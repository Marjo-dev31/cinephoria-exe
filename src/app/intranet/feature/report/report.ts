import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FormComponent } from '../../../shared/ui/form/form.component';
import { DynamicControl } from '../../../shared/models/form.interface';
import { Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-report',
  imports: [FormComponent],
  template: ` <div class="pt-40 ml-72 flex flex-col items-center">
    <h1 class="font-roboto text-6xl text-center my-6 border-2 bg-seasalt p-2 rounded-lg">
      Déclarer un incident
    </h1>
    <app-form
      [formModelConfig]="formModelConfig"
      class=" rounded-lg w-96 border-2 border-darkblue bg-seasalt"
    />
  </div>`,
})
export class ReportClaim implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  formModelConfig: DynamicControl[] = [];

  // TODO : call roomservice

  ngOnInit(): void {
    this.roomService
      .getAllCinema()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((rooms) => {
        const roomOptions = rooms.map((room) => `${room.cinema.city}/${room.number}`);

        this.formModelConfig = [
          {
            controlKey: 'password',
            formFieldType: 'select',
            selectOptions: roomOptions,
            label: 'Sélectionner une salle',
            validators: [Validators.required],
          },
          {
            controlKey: 'incident',
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

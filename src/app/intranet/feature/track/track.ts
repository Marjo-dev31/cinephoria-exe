import { Component, inject, signal } from '@angular/core';
import { IncidentService } from '../../../shared/services/incident.service';
import { DatatableComponent } from '../../../shared/ui/datatable/datatable.component';
import { IncidentInterface } from '../../models/incident.interface';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-track',
  imports: [DatatableComponent],
  template: `
    <div class="pt-40 ml-72 flex flex-col items-center">
      <h1 class="font-roboto text-6xl text-center my-6 border-2 bg-seasalt p-2 rounded-lg">
        Suivre les incidents
      </h1>
      <app-datatable
        [displayColumns]="displayColumns()"
        [data]="incidents()"
        class=" rounded-lg w-2/3 border-2 border-darkblue bg-seasalt"
      />
    </div>
  `,
})
export class TrackClaims {
  private readonly incidentService = inject(IncidentService);
  incidents = toSignal(this.incidentService.getAllIncidents(), { initialValue: [] });

  displayColumns = signal([
    {
      key: 'date',
      label: 'date',
      accessor: (row: IncidentInterface) => new Date(row.date).toLocaleDateString(),
    },
    {
      key: 'cinema',
      label: 'cinema',
      accessor: (row: IncidentInterface) => row.room.cinema.city,
    },
    {
      key: 'room',
      label: 'salle',
      accessor: (row: IncidentInterface) => row.room.number,
    },
    {
      key: 'description',
      label: 'description',
      accessor: (row: IncidentInterface) => row.description,
    },
  ]);
}

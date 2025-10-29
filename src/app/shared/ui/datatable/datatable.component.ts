import { Component, computed, effect, input } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { ColumnInterface } from '../../models/column.interface';
import { IncidentInterface } from '../../../intranet/models/incident.interface';
@Component({
  selector: 'app-datatable',
  standalone: true,
  imports: [CdkTableModule],
  templateUrl: './datatable.component.html',
})
export class DatatableComponent {
  displayColumns = input.required<ColumnInterface[]>();
  data = input.required<IncidentInterface[]>();

  // dataSource = computed(() => this.data());
  columnKeys = computed(() => [...this.displayColumns().map((column) => column.key)]);

  efect = effect(() => console.log(this.data(), this.displayColumns()));
}

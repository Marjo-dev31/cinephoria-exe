import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { IncidentInterface } from '../../intranet/models/incident.interface';

@Injectable({
  providedIn: 'root',
})
export class IncidentService {
  private readonly url = `${environment.serverUrl}/incident`;
  private readonly http = inject(HttpClient);

  getAllIncidents(): Observable<IncidentInterface[]> {
    return this.http.get<IncidentInterface[]>(this.url);
  }

  createIncident(newIncident: Omit<IncidentInterface, 'id'>): Observable<IncidentInterface> {
    return this.http.post<IncidentInterface>(this.url, newIncident);
  }
}

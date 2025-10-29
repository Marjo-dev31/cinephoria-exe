import { Routes } from '@angular/router';
import { LoginComponent } from './login/feature/login';
import { Intranet } from './intranet/feature/intranet';
import { TrackClaims } from './intranet/feature/track/track';
import { ReportClaim } from './intranet/feature/report/report';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'intranet',
    component: Intranet,
    children: [
      { path: 'declarerIncident', component: ReportClaim },
      { path: 'suivreIncidents', component: TrackClaims },
    ],
  },
];

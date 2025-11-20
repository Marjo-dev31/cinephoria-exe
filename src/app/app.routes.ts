import { Routes } from '@angular/router';
import { LoginComponent } from './login/feature/login';
import { Intranet } from './intranet/feature/intranet';
import { TrackClaims } from './intranet/feature/track/track';
import { ReportClaim } from './intranet/feature/report/report';
import { roleGuard } from './shared/guards/role.guard';
import { ForbiddenComponent } from './shared/component/forbidden.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'intranet',
    component: Intranet,
    canActivate: [roleGuard],
    canActivateChild: [roleGuard],
    data: { expectedRoles: ['admin', 'employee'] },
    children: [
      {
        path: 'declarerIncident',
        component: ReportClaim,
        data: { expectedRoles: ['admin', 'employee'] },
      },
      {
        path: 'suivreIncidents',
        component: TrackClaims,
        data: { expectedRoles: ['admin', 'employee'] },
      },
    ],
  },
  { path: 'forbidden', component: ForbiddenComponent },
];

import { Component, inject } from '@angular/core';
import { SidebarComponent } from '../../shared/ui/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-intranet',
  imports: [SidebarComponent, RouterOutlet],
  template: `<app-sidebar [currentUserName]="currentUser().username" /> <router-outlet />`,
})
export class Intranet {
  private readonly userService = inject(UserService);
  readonly currentUser = toSignal(this.userService.currentUser, {
    initialValue: {
      id: '',
      username: '',
      role: '',
      access_token: '',
    },
  });
}

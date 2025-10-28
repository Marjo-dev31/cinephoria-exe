import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="italic p-4 capitalize font-monserrat w-72 bg-sage h-full absolute ">
      <h2 class="text-center mt-48">Bienvenue {{ currentUserName() }}</h2>
      <div class="flex flex-col justify-between items-end mt-36">
        <ul>
          <li class="p-4">
            <a [routerLink]="['/intranet/suivreIncidents']">Déclarer un sinistre</a>
          </li>
          <li class="p-4 text-end">
            <a [routerLink]="['/intranet/declarerIncident']" class="">Suivre un sinistre</a>
          </li>
        </ul>
        <button (click)="logout()" class="flex absolute bottom-0 p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
            />
          </svg>
          Me déconnecter
        </button>
      </div>
    </div>
  `,
})
export class SidebarComponent {
  private readonly userService = inject(UserService);
  currentUserName = input<string>('');

  logout() {
    this.userService.logout();
  }
}

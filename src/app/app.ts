import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: ` <main class="h-full text-darkblue bg-seasalt " id="bgImg">
    <router-outlet />
  </main>`,
  styles: `
    #bgImg {
      background: center / contain url('/8620.jpg');
    }
  `,
})
export class AppComponent {
  title = 'cinephoria-exe';
}

import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormComponent } from '../../shared/ui/form/form.component';
import { UserService } from '../../shared/services/user.service';
import { LoginCredantialInterface } from '../models/user.interface';
import { DynamicControl } from '../../shared/models/form.interface';

@Component({
  selector: 'app-login',
  imports: [FormComponent],
  templateUrl: './login.html',
})
export class LoginComponent {
  private readonly userService = inject(UserService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  readonly errorMessage = signal('');

  handleLogin(loginCredentials: LoginCredantialInterface) {
    this.userService
      .login(loginCredentials)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response) => {
          if (response) {
            this.router.navigate(['intranet/declarerIncident']);
          }
        },
        error: (err) => this.errorMessage.set(err.message),
      });
  }

  readonly formModelConfig: DynamicControl[] = [
    {
      controlKey: 'mail',
      formFieldType: 'input',
      inputType: 'email',
      label: 'mail',
      validators: [Validators.required, Validators.email],
    },
    {
      controlKey: 'password',
      formFieldType: 'input',
      inputType: 'password',
      label: 'password',
      validators: [
        Validators.required,
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{12,}$'),
      ],
    },
  ];
}

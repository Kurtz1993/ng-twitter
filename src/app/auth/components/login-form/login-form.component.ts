import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserCredentials } from '@app/models';
import { AuthService } from '@app/services';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  userCredentials = {};

  constructor(private authService: AuthService, private router: Router) {}

  login(credentials: UserCredentials): void {
    this.authService.login(credentials.email, credentials.password).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}

import { Component } from '@angular/core';

import { RegistrationData, User, UserCredentials } from './models';
import { AuthService, UserService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // user: User = this.userService.currentUser;

  get user(): User {
    return this.userService.currentUser;
  }

  constructor(private authService: AuthService, private userService: UserService) {}

  registerUser(userData: RegistrationData): void {
    this.userService.register(userData).subscribe(() => {
      // Navigate to the home screen
    });
  }

  login(userCredentials: UserCredentials): void {
    this.authService.login(userCredentials.email, userCredentials.password).subscribe(() => {
      // Navigate to the home screen
      // this.user = this.userService.currentUser;
    });
  }

  logout(): void {
    this.authService.logout();
    // this.user = null;
  }
}

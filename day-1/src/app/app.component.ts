import { Component } from '@angular/core';
import { RegistrationData } from './models';

@Component({
  selector: 'app-root',
  template: `
    <app-registration-form (registration)="registerUser($event)"></app-registration-form>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-twitter';

  registerUser(userData: RegistrationData): void {
    console.log(userData);
  }
}

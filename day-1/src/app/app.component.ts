import { Component } from '@angular/core';
import { RegistrationData } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-twitter';

  registerUser(userData: RegistrationData): void {
    console.log(userData);
  }
}

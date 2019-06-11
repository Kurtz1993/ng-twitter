import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { RegistrationData, User } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user$: Observable<User>;

  registerUser(userData: RegistrationData): void {
    console.log(userData);
  }
}

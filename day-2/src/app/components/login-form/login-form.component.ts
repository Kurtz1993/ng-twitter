import { Component, Output, EventEmitter } from '@angular/core';

import { RegistrationData } from '@app/models';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Output()
  login = new EventEmitter<RegistrationData>();

  userCredentials = new RegistrationData();
}

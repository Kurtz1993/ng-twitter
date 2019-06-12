import { Component, Output, EventEmitter } from '@angular/core';

import { UserCredentials } from '@app/models';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Output()
  login = new EventEmitter<UserCredentials>();

  userCredentials = {};
}

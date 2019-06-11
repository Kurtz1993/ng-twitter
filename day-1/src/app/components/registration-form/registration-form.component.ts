import { Component, Output, EventEmitter } from '@angular/core';

import { RegistrationData } from '@app/models';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent {
  @Output()
  registration = new EventEmitter<RegistrationData>();

  registrationData: RegistrationData = {};

  validateData(formData: RegistrationData): void {
    if (this.passwordsMatch(formData.password, formData.confirmPassword)) {
      this.registration.emit(formData);
    }
  }

  private passwordsMatch(password: string, confirmPassword: string): boolean {
    return password === confirmPassword;
  }
}

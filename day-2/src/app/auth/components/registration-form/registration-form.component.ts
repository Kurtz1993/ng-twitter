import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { RegistrationData } from '@app/models';
import { UserService } from '@app/services';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent {
  registrationData = new RegistrationData();
  error: any;

  constructor(private userService: UserService, private router: Router) {}

  validateData(formData: RegistrationData): void {
    if (this.passwordsMatch(formData.password, formData.confirmPassword)) {
      // this.registration.emit(formData);
      this.userService.register(formData).subscribe(
        () => {
          this.router.navigate(['/auth/login']);
        },
        err => {
          this.error = err.error;
        }
      );
    }
  }

  private passwordsMatch(password: string, confirmPassword: string): boolean {
    return password === confirmPassword;
  }
}

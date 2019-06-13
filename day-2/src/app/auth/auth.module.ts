import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { LoginFormComponent, RegistrationFormComponent } from './components';

const routes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: 'register',
    component: RegistrationFormComponent,
  },
];

@NgModule({
  declarations: [LoginFormComponent, RegistrationFormComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class AuthModule {}

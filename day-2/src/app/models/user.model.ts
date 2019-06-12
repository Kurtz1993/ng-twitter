export class User {
  name?: string;
  email?: string;
}

export class RegistrationData extends User {
  password?: string;
  confirmPassword?: string;
}

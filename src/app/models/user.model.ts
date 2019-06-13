export class User {
  constructor(public name?: string, public email?: string) {}
}

export class RegistrationData extends User {
  password?: string;
  confirmPassword?: string;
}

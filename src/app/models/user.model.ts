export class User {
  constructor(public name?: string, public email?: string, public gravatar?: string) {}
}

export class RegistrationData extends User {
  password?: string;
  confirmPassword?: string;
}

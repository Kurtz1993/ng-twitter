export class User {
  gravatar?: string;
  constructor(public name?: string, public email?: string) {}
}

export class RegistrationData extends User {
  password?: string;
  confirmPassword?: string;
}

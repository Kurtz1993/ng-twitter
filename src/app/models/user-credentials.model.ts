import { User } from './user.model';

export interface UserCredentials extends Partial<User> {
  password?: string;
}

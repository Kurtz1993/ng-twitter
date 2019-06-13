import { User } from '@app/models';

export interface Tweet {
  body: string;
  author: User;
  /**
   * This property comes as a string in ISO format.
   */
  createdAt: string;
}

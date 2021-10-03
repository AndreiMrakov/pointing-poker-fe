import { IUserFromBE } from '@/utils/interfaces';

export class UserModel {
  name: string;

  userId: string;

  role?: string;

  score?: string;

  constructor(user: IUserFromBE) {
    this.role = user.role;
    this.name = user.name;
    this.score = user.score;
    this.userId = user.id.toString();
  }
}

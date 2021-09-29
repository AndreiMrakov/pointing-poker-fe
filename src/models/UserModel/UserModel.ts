import { IUser } from '@/utils/interfaces';

export class UserModel {
  name: string;

  userId: string;

  role?: string;

  score?: string;

  constructor(user: IUser) {
    this.role = user.role;
    this.name = user.name;
    this.score = user.score;
    this.userId = user.userId;
  }
}

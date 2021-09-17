import { IUser } from '@/interfaces';

export class UserModel {
  id: string;

  role?: string;

  name: string;

  score?: string;

  room: string;

  constructor(user: IUser) {
    this.id = user.id;
    this.name = `User${user.id.slice(0, 3)}`;
    this.role = user.role;
    this.name = user.name;
    this.score = user.score;
    this.room = user.room;
  }
}

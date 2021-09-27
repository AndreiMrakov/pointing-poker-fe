import { IRoomMember } from '@/utils/interfaces';

export class RoomMemberModel {
  name: string;

  userId: string;

  role?: string;

  score?: string;

  constructor(user: IRoomMember) {
    this.role = user.role;
    this.name = user.name;
    this.score = user.score;
    this.userId = user.userId;
  }
}

import { IRoomMember } from '@/utils/interfaces';

export class RoomMemberModel {
  name: string;

  roomUserId: string;

  role?: string;

  score?: string;

  constructor(user: IRoomMember) {
    this.role = user.role;
    this.name = user.name;
    this.score = user.score;
    this.roomUserId = user.roomUserId;
  }
}

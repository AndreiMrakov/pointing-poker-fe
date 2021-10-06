import { IRoomFromBE } from '@/utils/interfaces';

export class RoomStateModel {
  roomId: string;

  roomTitle: string;

  voteSystem?: string;

  dealerRights?: string;

  roomState: string

  constructor(room: IRoomFromBE) {
    this.roomId = room.id;
    this.roomTitle = room.title;
    this.roomState = room.state;
  }
}

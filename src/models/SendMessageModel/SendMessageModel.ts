import { ISendMessage } from '@/utils/interfaces';

export class SendMessageModel {
  text: string;

  roomId: string;

  roomUserId: number

  constructor(message: ISendMessage) {
    this.text = message.text;
    this.roomId = message.roomId;
    this.roomUserId = +message.roomUserId;
  }
}

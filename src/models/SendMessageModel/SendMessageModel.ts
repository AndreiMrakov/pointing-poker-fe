import { ISendMessage } from '@/utils/interfaces';

export class SendMessageModel {
  text: string;

  roomId: string;

  userId: number

  constructor(message: ISendMessage) {
    this.text = message.text;
    this.roomId = message.roomId;
    this.userId = message.userId;
  }
}

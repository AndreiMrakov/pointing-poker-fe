import { IMessage } from '@/utils/interfaces';

export class MessageModel {
  id: number;

  userName: string;

  message: string;

  constructor(message: IMessage) {
    this.id = message.id;
    this.userName = message.userName;
    this.message = message.message;
  }
}

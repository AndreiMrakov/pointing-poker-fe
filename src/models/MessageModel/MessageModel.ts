import { IMessageFromBE } from '@/utils/interfaces';

export class MessageModel {
  id: string;

  userName: string;

  message: string;

  constructor(message: IMessageFromBE) {
    this.id = message.id.toString();
    this.userName = message.name;
    this.message = message.text;
  }
}

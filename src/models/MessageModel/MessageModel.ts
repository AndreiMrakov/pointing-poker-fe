import { IMessageFromBE } from '@/utils/interfaces';

export class MessageModel {
  messageId: string;

  userId: string;

  userName: string;

  text: string;

  constructor(message: IMessageFromBE) {
    this.messageId = message.id.toString();
    this.userName = message.name;
    this.text = message.text;
    this.userId = message.userId.toString();
  }
}

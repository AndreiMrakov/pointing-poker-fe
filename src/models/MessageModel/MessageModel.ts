import { IMessageFromBE } from '@/utils/interfaces';

export class MessageModel {
  id: string;

  name: string;

  text: string;

  constructor(message: IMessageFromBE) {
    this.id = message.id.toString();
    this.name = message.name;
    this.text = message.text;
  }
}

interface msg {
  userId: number;
  messageId: number;
  roomId: string;
  name: string;
  text: string;
}

export class MessageModel {
  messageId: string;

  userId: string;

  name: string;

  text: string;

  constructor(message: msg) {
    this.messageId = message.messageId.toString();
    this.name = message.name;
    this.text = message.text;
    this.userId = message.userId.toString();
  }
}

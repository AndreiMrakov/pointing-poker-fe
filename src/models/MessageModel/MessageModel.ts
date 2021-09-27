interface msg {
  id: number;
  roomId: string;
  roomUserId: number;
  name: string;
  text: string;
}

export class MessageModel {
  id: string;

  name: string;

  text: string;

  constructor(message: msg) {
    this.id = message.id.toString();
    this.name = message.name;
    this.text = message.text;
  }
}

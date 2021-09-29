interface msg {
  text: string;

  roomId: string;

  userId: number | string
}

export class SendMessageModel {
  text: string;

  roomId: string;

  userId: number

  constructor(message: msg) {
    this.text = message.text;
    this.roomId = message.roomId;
    this.userId = +message.userId;
  }
}

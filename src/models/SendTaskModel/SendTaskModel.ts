interface task {
  title: string;

  roomId: string;
}

export class SendTaskModel {
  text: string;

  roomId: string;

  constructor(task: task) {
    this.text = task.title;
    this.roomId = task.roomId;
  }
}

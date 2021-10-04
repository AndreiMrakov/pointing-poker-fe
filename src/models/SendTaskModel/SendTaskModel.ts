interface task {
  title: string;

  roomId: string;
}

export class SendTaskModel {
  title: string;

  roomId: string;

  constructor(task: task) {
    this.title = task.title;
    this.roomId = task.roomId;
  }
}

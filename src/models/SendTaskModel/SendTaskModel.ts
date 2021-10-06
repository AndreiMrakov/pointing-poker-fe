interface INewTask {
  title: string;

  roomId: string;
}

export class SendTaskModel {
  title: string;

  roomId: string;

  constructor(task: INewTask) {
    this.title = task.title;
    this.roomId = task.roomId;
  }
}

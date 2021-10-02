import { ITaskFromBE } from '@/utils/interfaces';

export class TaskModel {
  id: number;

  title: string;

  score: string;

  isActive: boolean;

  constructor(task: ITaskFromBE) {
    this.id = task.id;
    this.title = task.title;
    this.score = task.score.toString();
    this.isActive = task.isActive;
  }
}

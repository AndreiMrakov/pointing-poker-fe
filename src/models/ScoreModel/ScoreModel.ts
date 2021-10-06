import { IUserScoreFromBE } from '@/utils/interfaces';

export class ScoreModel {
  taskId: string;

  userId: string;

  score: string;

  constructor(score: IUserScoreFromBE) {
    this.taskId = score.taskId.toString();
    this.userId = score.userId.toString();
    this.score = score.score || '0';
  }
}

export interface ITaskFromBE {
  id: number;
  title: string;
  roomId: string;
  description?: string;
  // eslint-disable-next-line camelcase
  is_active: boolean;
  score?: string;
  avgScore?: number;
  createdAt: Date;
}

export interface ITaskFromBE {
  id: number;
  title: string;
  roomId: string;
  description?: string;
  isActive: boolean;
  score?: string;
  avgScore?: number;
  createdAt: Date;
}

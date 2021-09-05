export type CardType = {
  id: string;
  name: string;
  score: number;
  back: string;
};

export type UserType = {
  id: string;
  type: string;
  name: string;
  surname: string;
  job: string;
  avatar: string;
  currentScore: number | null;
};

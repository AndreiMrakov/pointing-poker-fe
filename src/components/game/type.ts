export type CardType = {
  id: string;
  name: string;
  score: number;
  back: string;
  front: string;
};

export type UserType = {
  id: string;
  name: string;
  surname: string;
  job: string;
  avatar: string;
  currentScore: number | null;
};

export const scoreAnalizer = (type: string, currentScore: string): string => {
  const defaultScore = type === 'spectator' ? '-' : 'in progress';
  return currentScore || defaultScore;
};

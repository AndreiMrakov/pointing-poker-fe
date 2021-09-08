export const scoreAnalizer = (type: string, currentScore: number): string | number => {
  const defaultScore = type === 'observer' ? '-' : 'in progress';
  return currentScore || defaultScore;
};

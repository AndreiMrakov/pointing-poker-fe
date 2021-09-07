export const scoreAnalizer = (type: string, currentScore: number | null): string | number => {
  const defaultScore = type === 'observer' ? '-' : 'in progress';
  return currentScore ? currentScore : defaultScore;
};

import React, {
  Dispatch,
  FC,
  SetStateAction,
  useMemo,
  MouseEvent,
} from 'react';
import classNames from 'classnames';
import styles from './VoteCard.module.scss';

interface IVoteCardProps {
  score: string;
  setSelectedCardValue: Dispatch<SetStateAction<string>>;
  isCardOpened: boolean;
  selectedCardValue: string;
}

export const VoteCard: FC<IVoteCardProps> = ({
  score,
  setSelectedCardValue,
  isCardOpened,
  selectedCardValue,
}) => {
  const className = useMemo(() => classNames(styles.card, {
    [styles.unactive]: isCardOpened,
    [styles.active]: score === selectedCardValue,
  }),
  [isCardOpened, selectedCardValue]);

  function onCardClick(event: MouseEvent): void {
    const currentElem = event.target as HTMLElement;
    if (!currentElem.textContent) return;
    setSelectedCardValue(currentElem.textContent);
  }

  return (
    <li
      className={className}
      onClick={onCardClick}
      aria-hidden="true"
    >
      {score}
    </li>
  );
};

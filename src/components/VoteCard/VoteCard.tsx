import React, { FC, useMemo } from "react";
import styles from './VoteCard.module.scss';
import classNames from "classnames";

interface IVoteCardProps {
  score: string;
  setSelectedCardValue: (e: string) => void;
  isCardOpened: boolean;
  selectedCardValue: string;
};

export const VoteCard: FC<IVoteCardProps> = ({ 
    score, 
    setSelectedCardValue,
    isCardOpened,
    selectedCardValue
}) => {

  const className = useMemo(()=> 
    classNames(styles.card, {
      [styles.unactive]: isCardOpened,
      [styles.active]: score === selectedCardValue
    })
  ,
  [isCardOpened, selectedCardValue])

    function onCardClick(event: React.MouseEvent): void {
      const currentElem = event.target as HTMLElement;
      setSelectedCardValue(currentElem.textContent!)
    }

  return (
    <li className={className} onClick={onCardClick}>
        {score}
    </li>
  );
};

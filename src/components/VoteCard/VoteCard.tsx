import React, { FC, useMemo } from "react";
import styles from './VoteCard.module.scss';
import classNames from "classnames";

interface IVoteCard {
  score: string;
  setSelectedCardValue: (e: string) => void;
  isCardOpened: boolean;
  selectedCardValue: string;
};

export const VoteCard: FC<IVoteCard> = ({ 
    score, 
    setSelectedCardValue,
    isCardOpened,
    selectedCardValue
}) => {
    
    const classActive = useMemo(
      () => isCardOpened && styles.unactive,
      [isCardOpened]
    );

    const classUnactive = useMemo(
      () => score === selectedCardValue  &&  styles.active,
      [selectedCardValue]
    );

    function onCardClick(event: React.MouseEvent): void {
      const currentElem = event.target as HTMLElement;
      setSelectedCardValue(currentElem.textContent!)
    }

  return (
    <li className={classNames(styles.card, classActive, classUnactive)} 
        onClick={onCardClick}>
        {score}
    </li>
  );
};

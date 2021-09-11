import React, { FC } from "react";
import styles from './VoteCard.module.scss';
import classNames from "classnames";

interface Props {
  score: string;
  className: string;
  setSelectedCardValue: (e: string) => void
};

export const VoteCard: FC<Props> = ({ 
    score, 
    className,
    setSelectedCardValue 
  }) => {

    function onCardClick(event: React.MouseEvent): void {
      const currentElem = event.target as HTMLElement;
      setSelectedCardValue(currentElem.textContent!)
    }

  return (
    <li className={classNames(styles.card, className)} 
        onClick={onCardClick}>
        {score}
    </li>
  );
};

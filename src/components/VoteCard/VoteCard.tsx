import { CardType } from "@/untils/types/CardType";
import React, { FC } from "react";
import styles from './VoteCard.module.scss';

type Props = {
  card: CardType;
  onCardClick: (e:React.MouseEvent) => void;
  styleName: any
};

export const VoteCard: FC<Props> = (
  { 
    card, 
    onCardClick, 
    styleName 
  }) => {

  return (
    <li className={`${styles.card} ${styleName}`} 
        onClick={onCardClick}>
        {card.score}
    </li>
  );
};

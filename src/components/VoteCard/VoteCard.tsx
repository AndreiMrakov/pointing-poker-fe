import { CardType } from "@/untils/types/CardType";
import React, { FC } from "react";
import styles from './VoteCard.module.scss';
import classNames from "classnames";

interface Props {
  card: CardType;
  onCardClick: (e:React.MouseEvent) => void;
  styleName: string
};

export const VoteCard: FC<Props> = (
  { 
    card, 
    onCardClick, 
    styleName 
  }) => {

  return (
    <li className={classNames(styles.card, styleName)} 
        onClick={onCardClick}>
        {card.score}
    </li>
  );
};

import React, { FC } from "react";
import styles from './VoteCard.module.scss';
import classNames from "classnames";

interface Props {
  score: string;
  onCardClick: (e:React.MouseEvent) => void;
  styleName: string
};

export const VoteCard: FC<Props> = (
  { 
    score, 
    onCardClick, 
    styleName 
  }) => {

  return (
    <li className={classNames(styles.card, styleName)} 
        onClick={onCardClick}>
        {score}
    </li>
  );
};

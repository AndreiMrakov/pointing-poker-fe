import { CardType } from "@/untils/types/CardType";
import React, { FC } from "react";
import styles from './VoteCard.module.scss';

type Props = {
  card: CardType;
};

export const VoteCard: FC<Props> = ({ card }) => {
  return (
    <div className={styles.card}>
      <div className={styles.nameTop}>{card.name}</div>
      <h3 className={styles.score}>{card.score}</h3>
      <div className={styles.nameBottom}>{card.name}</div>
    </div>
  );
};

import { CardType } from "@/untils/types/CardType";
import React, { FC } from "react";
import styles from './VoteCard.module.scss';

type Props = {
  card: CardType;
};

export const VoteCard: FC<Props> = ({ card }) => {
  const { name, score } = card;

  return (
    <div className={styles.card}>
      <div className={styles.nameTop}>{name}</div>
      <h3 className={styles.score}>{score}</h3>
      <div className={styles.nameBottom}>{name}</div>
    </div>
  );
};

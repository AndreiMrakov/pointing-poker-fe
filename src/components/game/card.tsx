import React, { FC } from "react";
import { CardType } from "./type";
import styles from '@/styles/cards.module.scss';

type Props = {
  card: CardType;
};

const Card: FC<Props> = ({ card }) => {
  const { name, score } = card;

  return (
    <div className={styles.card}>
      <div className={styles.nameTop}>{name}</div>
      <h3 className={styles.score}>{score}</h3>
      <div className={styles.nameBottom}>{name}</div>
    </div>
  );
};

export default Card;

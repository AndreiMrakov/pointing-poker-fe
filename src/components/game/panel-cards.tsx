import React from "react";
import Card from "./card";
import { CardType } from "./type";
import styles from '@/styles/cards.module.scss';

const mockCard = (id: string, name: string, score: number) => {
  return {
    id,
    name,
    score,
    back: '',
  };
};

const PanelCards = () => {
  //TODO: get list from axios
  const listCards: CardType[] = [
    mockCard('1', 'SP', 2),
    mockCard('2', 'SP', 5),
    mockCard('3', 'SP', 10),
    mockCard('4', 'SP', 25),
    mockCard('5', 'SP', 50),
  ];

  return (
    <ul className={styles.listCards}>
      {listCards.map((card: CardType) => <Card card={card} key={card.id} />)}
    </ul>
  );
};

export default PanelCards;

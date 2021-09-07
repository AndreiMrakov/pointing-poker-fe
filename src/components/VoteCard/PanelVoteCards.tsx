import React from "react";
import { VoteCard } from "./VoteCard";
import styles from "./VoteCard.module.scss";
import cards from "@/store/cards.json";
import { CardType } from "@/untils/types/CardType";

export const PanelVoteCards = () => {
  const listCards: CardType[] = cards;  

  return (
    <ul className={styles.listCards}>
      {listCards.map((card: CardType) => <VoteCard card={card} key={card.id} />)}
    </ul>
  );
};

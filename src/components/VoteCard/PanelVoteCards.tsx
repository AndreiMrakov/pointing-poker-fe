import React from "react";
import { VoteCard } from "./VoteCard";
import styles from "./VoteCard.module.scss";
import cards from "@/mocks/cards.json";

export const PanelVoteCards = () => {
  return (
    <ul className={styles.listCards}>
      {cards.map((card) => <VoteCard card={card} key={card.id} />)}
    </ul>
  );
};

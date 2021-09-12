import React from "react";
import { VoteCard } from "./VoteCard";
import styles from "./VoteCard.module.scss";
import { cards } from "@/mocks/cards";

interface IPanelVoteCardsProps {
  selectedCardValue: string;
  setSelectedCardValue: (e: string) => void;
  isCardOpened: boolean
}

export const PanelVoteCards: React.FC<IPanelVoteCardsProps> = ({
  selectedCardValue, 
  setSelectedCardValue,
  isCardOpened
}) => {

  return (
    <ul className={styles.listCards}>
      {cards.map(card => 
        <VoteCard 
          score={card} 
          key={card} 
          setSelectedCardValue={setSelectedCardValue}
          isCardOpened={isCardOpened}
          selectedCardValue={selectedCardValue}
        />)
      }
    </ul>
  );
};

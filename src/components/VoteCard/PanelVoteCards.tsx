import React from "react";
import { VoteCard } from "./VoteCard";
import styles from "./VoteCard.module.scss";
import cards from "@/mocks/cards.json";

interface IPanelVoteCards {
  selectedCardValue: string;
  setSelectedCardValue: (e: string) => void;
  isCardVisible: boolean
}

export const PanelVoteCards: React.FC<IPanelVoteCards> = ({
  selectedCardValue, 
  setSelectedCardValue,
  isCardVisible
}) => {

  function onCardClick(event: React.MouseEvent): void {
    const currentElem = event.target as HTMLElement;
    setSelectedCardValue(currentElem.textContent!)
  }


  return (
    <ul className={styles.listCards}>
      {cards.map(card => 
        <VoteCard 
          card={card} 
          key={card.id} 
          styleName=
          {
            `${card.score === +selectedCardValue && styles.active} 
             ${isCardVisible && styles.unactive}
          `} 
          onCardClick={onCardClick}
        />)
      }
    </ul>
  );
};

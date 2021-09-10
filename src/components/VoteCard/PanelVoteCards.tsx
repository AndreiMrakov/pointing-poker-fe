import React from "react";
import { VoteCard } from "./VoteCard";
import styles from "./VoteCard.module.scss";
import { cards } from "@/mocks/cards";

interface IPanelVoteCards {
  selectedCardValue: string;
  setSelectedCardValue: (e: string) => void;
  isCardOpened: boolean
}

export const PanelVoteCards: React.FC<IPanelVoteCards> = ({
  selectedCardValue, 
  setSelectedCardValue,
  isCardOpened
}) => {

  function onCardClick(event: React.MouseEvent): void {
    const currentElem = event.target as HTMLElement;
    setSelectedCardValue(currentElem.textContent!)
  }


  return (
    <ul className={styles.listCards}>
      {cards.map(card => 
        <VoteCard 
          score={card} 
          key={card} 
          styleName=
          {
            `${card === selectedCardValue && styles.active} 
             ${isCardOpened && styles.unactive}
          `} 
          onCardClick={onCardClick}
        />)
      }
    </ul>
  );
};

import React from "react";
import { VoteCard } from "./VoteCard";
import styles from "./VoteCard.module.scss";
import { cards } from "@/mocks/cards";
import classNames from "classnames";

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

  return (
    <ul className={styles.listCards}>
      {cards.map(card => 
        <VoteCard 
          score={card} 
          key={card} 
          className={classNames(
            {
              [styles.active]: card === selectedCardValue,
              [styles.unactive]: isCardOpened
            }
          )} 
          setSelectedCardValue={setSelectedCardValue}
        />)
      }
    </ul>
  );
};

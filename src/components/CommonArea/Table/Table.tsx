import { PrimaryButton, SecondaryButton } from "@/components/Button";
import React from "react";
import styles from "./Table.module.scss";

interface ITable {
  isCardOpened: boolean;
  selectedCardValue: string;
  setIsCardIsVisible: (e: boolean) => void;
  setSelectedCardValue: (e: string) => void;
}

export const Table: React.FC<ITable> = (
  {
    selectedCardValue,
    isCardOpened, 
    setIsCardIsVisible, 
    setSelectedCardValue, 
  }) => {

  function showCards() {
    setIsCardIsVisible(true);
  }

  function removeChosenCard() {
    setSelectedCardValue('');
    setIsCardIsVisible(false)
  }

  return (
      <div className={styles.table}>
        {!selectedCardValue && !isCardOpened && 
          <p> 
            Pick your cards!
          </p> 
        }
        {selectedCardValue && !isCardOpened &&
          <PrimaryButton onClick={showCards}>
            Show cards
          </ PrimaryButton>
        }
        {isCardOpened && 
          <SecondaryButton onClick={removeChosenCard}>
            New voting
          </SecondaryButton>
        }
      </div>
  )
}
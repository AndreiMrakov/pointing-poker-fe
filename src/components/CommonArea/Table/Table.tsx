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
        <p className={selectedCardValue || isCardOpened ? styles.none : ''}>
        Pick your cards!
        </p> 
        <PrimaryButton 
          className={selectedCardValue && !isCardOpened ? '' : styles.none} 
          onClick={showCards}>
          Show cards
        </ PrimaryButton>
        <SecondaryButton 
          className={isCardOpened ? '' : styles.none} 
          onClick={removeChosenCard}>
          New voting
        </SecondaryButton>
      </div>
  )
}
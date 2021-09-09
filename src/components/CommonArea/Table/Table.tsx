import { PrimaryButton, SecondaryButton } from "@/components/Button";
import React from "react";
import styles from "./Table.module.scss";

interface ITable {
  isCardVisible: boolean;
  selectedCardValue: string;
  setIsCardIsVisible: (e: boolean) => void;
  setSelectedCardValue: (e: string) => void;
}

export const Table: React.FC<ITable> = (
  {
    selectedCardValue,
    isCardVisible, 
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
        <p className={selectedCardValue || isCardVisible ? styles.none : ''}>
        Pick your cards!
        </p> 
        <PrimaryButton 
          className={selectedCardValue && !isCardVisible ? '' : styles.none} 
          onClick={showCards}>
          Show cards
        </ PrimaryButton>
        <SecondaryButton 
          className={isCardVisible ? '' : styles.none} 
          onClick={removeChosenCard}>
          New voting
        </SecondaryButton>
      </div>
  )
}
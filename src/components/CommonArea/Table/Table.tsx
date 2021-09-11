import { PrimaryButton, SecondaryButton } from "@/components/Button";
import React from "react";
import styles from "./Table.module.scss";
import classNames from "classnames";

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
        <p className={classNames({
          [styles.none]: selectedCardValue || isCardOpened
          })
        }>
        Pick your cards!
        </p> 
        <PrimaryButton 
          className={classNames({
            [styles.none]: !selectedCardValue || isCardOpened
            })
          } 
          onClick={showCards}>
          Show cards
        </ PrimaryButton>
        <SecondaryButton 
          className={classNames({
            [styles.none]: !isCardOpened}
          )} 
          onClick={removeChosenCard}>
          New voting
        </SecondaryButton>
      </div>
  )
}
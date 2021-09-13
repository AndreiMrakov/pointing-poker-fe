import React from "react";
import { CardNest } from "./CardNest";
import { Table } from "./Table";
import styles from './CommonArea.module.scss'

interface ICommonArea {
  isCardOpened: boolean;
  selectedCardValue: string;
  setIsCardIsVisible: (e: boolean) => void;
  setSelectedCardValue: (e: string) => void;
}

export const CommonArea: React.FC<ICommonArea> = ({
   isCardOpened, 
   selectedCardValue, 
   setSelectedCardValue, 
   setIsCardIsVisible, 
  }) => {
  return (
    <section>
      <Table 
        isCardOpened={isCardOpened}
        setIsCardIsVisible={setIsCardIsVisible}
        setSelectedCardValue={setSelectedCardValue}
        selectedCardValue={selectedCardValue}
      />
      <CardNest 
        isCardOpened={isCardOpened}
        selectedCardValue={selectedCardValue}
        className={styles.cardMargin}
      />
    </section>
  )
}

import React from "react";
import styles from "./CardNest.module.scss";

interface ICardNest {
  isCardVisible: boolean;
  selectedCardValue: string
}

export const CardNest: React.FC<ICardNest> = ({ isCardVisible,selectedCardValue}) => {
  return (
    <section className={`
      ${styles.cardNest}
      ${isCardVisible ? styles.showCard : ''}`
    }>
        <div className={styles.frontSide}>
          {selectedCardValue}
        </div>
        <div className={`${styles.backSide} ${selectedCardValue ? styles.chosenCardBackground : ''}`}>
        </div>
    </section>
  )
}
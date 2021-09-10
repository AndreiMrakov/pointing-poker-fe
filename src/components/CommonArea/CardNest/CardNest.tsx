import React from "react";
import styles from "./CardNest.module.scss";
import classNames from "classnames";

interface ICardNest {
  isCardOpened: boolean;
  selectedCardValue: string;
  cardStyle?: string;
  userType?: string
}

export const CardNest: React.FC<ICardNest> = ({ isCardOpened,selectedCardValue, cardStyle, userType}) => {
  return (
    <section className={`
      ${styles.cardNest}
      ${isCardOpened && styles.showCard}
      ${cardStyle}
      ${userType === 'spectator' && styles.spectator}`
    }>
      {userType !== 'spectator' &&
      <> 
        <div className={styles.frontSide}>
          {selectedCardValue}
        </div>
        <div className={classNames(styles.backSide, selectedCardValue && styles.chosenCardBackground)}>
        </div>
      </>
      }
    </section>
  )
}
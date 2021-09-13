import React from "react";
import styles from "./CardNest.module.scss";
import classNames from "classnames";

interface ICardNestProps {
  isCardOpened: boolean;
  selectedCardValue: string;
  className?: string;
  userType?: string
}

export const CardNest: React.FC<ICardNestProps> = ({ 
  isCardOpened,
  selectedCardValue, 
  className, 
  userType
}) => {
  return (
    <section className={classNames(
        styles.cardNest,
        className, 
         {
          [styles.showCard]: isCardOpened,
          [styles.spectator]: userType === 'spectator'
         } 
    )}>
      {userType !== 'spectator' &&
      <> 
        <div className={styles.frontSide}>
          {selectedCardValue}
        </div>
        <div className={classNames(
            styles.backSide,
            {[styles.chosenCardBackground]: selectedCardValue}
        )}>
        </div>
      </>
      }
    </section>
  )
}
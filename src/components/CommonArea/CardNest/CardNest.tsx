import React from 'react';
import classNames from 'classnames';
import styles from './CardNest.module.scss';

interface ICardNestProps {
  selectedCardValue: string;
  className?: string;
  userRole?: string;
}

export const CardNest: React.FC<ICardNestProps> = ({
  selectedCardValue,
  className,
  userRole = 'spectator',
}) => (
  <section
    className={classNames(
      styles.cardNest,
      className,
      {
        [styles.showCard]: isCardOpened,
        [styles.spectator]: userRole === 'spectator',
      },
    )}
  >
    {userRole !== 'spectator'
      && (
        <>
          <div className={styles.frontSide}>
            {selectedCardValue}
          </div>
          <div
            className={classNames(
              styles.backSide,
              { [styles.chosenCardBackground]: selectedCardValue },
            )}
          />
        </>
      )}
  </section>
);

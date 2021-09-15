import React, { Dispatch, SetStateAction } from 'react';
import { PrimaryButton, SecondaryButton } from '@/components/Button';
import styles from './Table.module.scss';

interface ITableProps {
  isCardOpened: boolean;
  selectedCardValue: string;
  setIsCardIsVisible: Dispatch<SetStateAction<boolean>>;
  setSelectedCardValue: Dispatch<SetStateAction<string>>;
}

export const Table: React.FC<ITableProps> = ({
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
    setIsCardIsVisible(false);
  }

  return (
    <div className={styles.table}>
      {
        !selectedCardValue
        && !isCardOpened
        && <p>Pick your cards!</p>
      }
      {
        selectedCardValue
        && !isCardOpened
        && <PrimaryButton onClick={() => showCards()}>Show cards</PrimaryButton>
      }
      {
        isCardOpened
        && <SecondaryButton onClick={() => removeChosenCard()}>New voting</SecondaryButton>
      }
    </div>
  );
};

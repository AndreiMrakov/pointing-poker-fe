import React, { Dispatch, SetStateAction } from 'react';
import { CardNest } from './CardNest';
import { Table } from './Table';
import styles from './CommonArea.module.scss';

interface ICommonAreaProps {
  isCardOpened: boolean;
  selectedCardValue: string;
  setIsCardIsVisible: Dispatch<SetStateAction<boolean>>;
  setSelectedCardValue: Dispatch<SetStateAction<string>>;
}

export const CommonArea: React.FC<ICommonAreaProps> = ({
  isCardOpened,
  selectedCardValue,
  setSelectedCardValue,
  setIsCardIsVisible,
}) => (
  <section>
    <Table
      isCardOpened={isCardOpened}
      setIsCardIsVisible={setIsCardIsVisible}
      setSelectedCardValue={setSelectedCardValue}
      selectedCardValue={selectedCardValue}
    />
    <CardNest
      selectedCardValue={selectedCardValue}
      className={styles.cardMargin}
    />
  </section>
);

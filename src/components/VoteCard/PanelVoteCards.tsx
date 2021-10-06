import React from 'react';
import { VoteCard } from './VoteCard';
import styles from './VoteCard.module.scss';
import { cards } from '@/mocks/cards';

export const PanelVoteCards: React.FC = () => (
  <ul className={styles.listCards}>
    {cards.map((card) => (
      <VoteCard
        score={card}
        key={card}
      />
    ))}
  </ul>
);

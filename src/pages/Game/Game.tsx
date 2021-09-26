import React, { useState } from 'react';
import { PanelVoteCards } from '@/components/VoteCard';
import { PanelUsers } from '@/components/User';
import styles from './Game.module.scss';
import { CommonArea } from '@/components/CommonArea';
import { Controls } from '@/components/Controls';
import { Issues } from '@/components/Issues';
import { Chat } from '@/containers/Chat';

const title = 'Name room';

export const Game: React.FC = () => {
  const [isCardOpened, setIsCardIsVisible] = useState(false);
  const [selectedCardValue, setSelectedCardValue] = useState('');

  return (
    <main className={styles.main}>
      <section>
        <PanelUsers />
        <Chat />
      </section>
      <article className={styles.wrapper}>
        <section>
          <h1 className={styles.title}>{title}</h1>
          <Controls />
        </section>
        <CommonArea
          isCardOpened={isCardOpened}
          selectedCardValue={selectedCardValue}
          setIsCardIsVisible={setIsCardIsVisible}
          setSelectedCardValue={setSelectedCardValue}
        />
        <PanelVoteCards
          setSelectedCardValue={setSelectedCardValue}
          selectedCardValue={selectedCardValue}
          isCardOpened={isCardOpened}
        />
      </article>
      <Issues />
    </main>
  );
};

import React, { useState } from 'react';
import { PanelVoteCards } from '@/components/VoteCard';
import { PanelUsers } from '@/components/User';
import styles from './Game.module.scss';
import { CommonArea } from '@/components/CommonArea';
import { Controls } from '@/components/Controls';
import { Issues } from '@/components/Issues';
import { ChooseUserNameModal } from '@/components/Modals';

const title = 'Name room';

export const Game = () => {
  const [isCardOpened, setIsCardIsVisible] = useState(false);
  const [selectedCardValue, setSelectedCardValue] = useState('');

  const [modal, setModal] = useState(true);

  const showModal = () => {
    setModal(!modal);
  };

  return (
    <main className={styles.main}>
      <ChooseUserNameModal show={modal} setModal={setModal} onClick={showModal} />
      <PanelUsers />
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

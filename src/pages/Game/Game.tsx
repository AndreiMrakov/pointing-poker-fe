import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  PanelVoteCards,
  PanelUsers,
  CommonArea,
  Controls,
  Issues,
  ChooseUserNameModal,
} from '@/components';
import styles from './Game.module.scss';
import { Chat } from '@/containers';
import { roomStateSelectors } from '@/store/selectors';

export const Game: React.FC = () => {
  const [isCardOpened, setIsCardIsVisible] = useState(false);
  const [selectedCardValue, setSelectedCardValue] = useState('');
  const title = useSelector(roomStateSelectors.roomTitle);
  const [modal, setModal] = useState(true);

  const showModal = () => {
    setModal(!modal);
  };

  return (
    <main className={styles.main}>
      <ChooseUserNameModal show={modal} setModal={setModal} onClick={showModal} />
      <section className={styles.sideSection}>
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

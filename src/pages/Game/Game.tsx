import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  PanelVoteCards,
  PanelUsers,
  CommonArea,
  Controls,
  Issues,
} from '@/components';
import styles from './Game.module.scss';
import { Chat } from '@/containers';
import { roomStateSelectors } from '@/store/selectors';
import { useAppDispatch } from '@/store';
import { roomStateActions, userActions } from '@/store/actions';

export const Game: React.FC = () => {
  const [isCardOpened, setIsCardIsVisible] = useState(false);
  const [selectedCardValue, setSelectedCardValue] = useState('');
  const title = useSelector(roomStateSelectors.roomTitle);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.getUserDataByLS()).then((event) => {
      if (event.meta.requestStatus === 'fulfilled') {
        dispatch(roomStateActions.getRoomByUrl());
      }
    });
  }, []);

  return (
    <main className={styles.main}>
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

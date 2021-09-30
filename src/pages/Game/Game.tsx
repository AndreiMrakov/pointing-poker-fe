import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  PanelVoteCards,
  PanelUsers,
  CommonArea,
  Controls,
  Issues,
  NewGameModal,
} from '@/components';
import styles from './Game.module.scss';
import { Chat } from '@/containers';
import { roomStateSelectors } from '@/store/selectors';
import { checkUserIdandRoomId } from '@/helpers';
import { useAppDispatch } from '@/store';

export const Game: React.FC = () => {
  const [isCardOpened, setIsCardIsVisible] = useState(false);
  const [selectedCardValue, setSelectedCardValue] = useState('');
  const title = useSelector(roomStateSelectors.roomTitle);
  const roomId = useSelector(roomStateSelectors.roomId);
  const history = useHistory();
  const dispatch = useAppDispatch();

  useEffect(() => {
    checkUserIdandRoomId(dispatch, history);
  }, []);

  useEffect(() => {
    if (roomId) {
      history.push(`/games/${roomId}`);
    }
  }, [roomId]);

  return (
    <>
      {!roomId ? <NewGameModal />
        : (
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
        )}
    </>
  );
};

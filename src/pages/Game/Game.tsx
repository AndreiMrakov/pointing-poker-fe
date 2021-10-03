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
import { Chat, ProfileInfo } from '@/containers';
import { roomStateSelectors, userSelectors } from '@/store/selectors';
import { useAppDispatch } from '@/store';
import { membersActions, roomStateActions, userActions } from '@/store/actions';
import { socketService } from '@/services';
import { SocketEvent } from '@/utils/enums';

export const Game: React.FC = () => {
  const [isCardOpened, setIsCardIsVisible] = useState(false);
  const [selectedCardValue, setSelectedCardValue] = useState('');
  const title = useSelector(roomStateSelectors.roomTitle);
  const userId = useSelector(userSelectors.userId);
  const roomId = useSelector(roomStateSelectors.roomId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.getUserDataByLS()).then((event) => {
      if (event.meta.requestStatus === 'fulfilled') {
        dispatch(roomStateActions.getRoomByUrl());
      }
    });
  }, []);

  useEffect(() => {
    if (userId && roomId) {
      dispatch(membersActions.getMembers());
      socketService.emit(SocketEvent.RoomLeave, { userId, roomId });
      socketService.emit(SocketEvent.RoomJoin, { userId, roomId });
    }
  }, [userId, roomId]);

  return (
    <main className={styles.main}>
      <section className={styles.leftSection}>
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
      <section className={styles.rightSection}>
        <ProfileInfo />
        <Issues />
      </section>
    </main>
  );
};

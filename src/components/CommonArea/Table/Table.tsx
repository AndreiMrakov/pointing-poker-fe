import React, { Dispatch, SetStateAction } from 'react';
import { useSelector } from 'react-redux';
import { PrimaryButton, SecondaryButton } from '@/components';
import styles from './Table.module.scss';
import { roomStateSelectors, tasksSelectors, userSelectors } from '@/store/selectors';
import { socketService } from '@/services';
import { SocketEvent, StateRoomTitle } from '@/utils/enums';

export const Table: React.FC = () => {
  const score = useSelector(userSelectors.score);
  const id = useSelector(roomStateSelectors.roomId);
  const activeTask = useSelector(tasksSelectors.activeTask);
  const roomState = useSelector(roomStateSelectors.roomState);
  const role = useSelector(userSelectors.role)?.role;

  function showCards() {
    if (activeTask) {
      socketService.emit(SocketEvent.RoomShow, { id: activeTask.id });
    }
  }

  function gameFinish() {
    socketService.emit(SocketEvent.RoomFinish, { id });
  }

  return (
    <div className={styles.table}>
      {
        ((roomState !== StateRoomTitle.showCards
        && !score)
        || role !== 'admin')
        && <p>Pick your cards!</p>
      }
      {
        roomState !== StateRoomTitle.showCards
        && score
        && <PrimaryButton onClick={() => showCards()}>Show cards</PrimaryButton>
      }
      {
        roomState === StateRoomTitle.showCards
          && <SecondaryButton onClick={() => gameFinish()}>New voting</SecondaryButton>
      }
    </div>
  );
};

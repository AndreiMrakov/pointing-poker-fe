import React from 'react';
import { useSelector } from 'react-redux';
import { PrimaryButton, SecondaryButton } from '@/components';
import styles from './Table.module.scss';
import { roomStateSelectors, tasksSelectors, userSelectors } from '@/store/selectors';
import { socketService } from '@/services';
import { SocketEvent, StateRoomTitle } from '@/utils/enums';

export const Table: React.FC = () => {
  const score = useSelector(userSelectors.score);
  const activeTask = useSelector(tasksSelectors.activeTask);
  const roomState = useSelector(roomStateSelectors.roomState);
  const role = useSelector(userSelectors.role);

  const showCards = () => {
    if (activeTask) {
      socketService.emit(SocketEvent.RoomShow, activeTask.id);
    }
  };

  const gameFinish = () => {
    if (activeTask) {
      socketService.emit(SocketEvent.RoomFinish, activeTask.id);
    }
  };

  return (
    <div className={styles.table}>
      {
        ((roomState !== StateRoomTitle.showCards
        && !score)
        || role !== 'admin')
        && <p>Pick your cards!</p>
      }
      {
        role === 'admin'
        && roomState !== StateRoomTitle.showCards
        && score
        && <PrimaryButton onClick={showCards}>Show cards</PrimaryButton>
      }
      {
        role === 'admin'
        && roomState === StateRoomTitle.showCards
          && <SecondaryButton onClick={gameFinish}>Reset</SecondaryButton>
      }
    </div>
  );
};

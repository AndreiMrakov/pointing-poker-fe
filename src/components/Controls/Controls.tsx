import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { PrimaryButton, SecondaryButton } from '@/components';
import styles from './Controls.module.scss';
import { socketService } from '@/services';
import { SocketEvent } from '@/utils/enums';
import { roomStateSelectors, tasksSelectors } from '@/store/selectors';
import { IRoomState } from '@/utils/interfaces';
import { useAppDispatch } from '@/store';
import { membersActions, roomStateActions, taskActions } from '@/store/actions';

const NAMES_BTN = {
  run: 'Start',
  show: 'Show cards',
  stop: 'Reset',
};

export const Controls: React.FC = () => {
  const activeTask = useSelector(tasksSelectors.activeTask);
  const roomId = useSelector(roomStateSelectors.roomId);
  const dispatch = useAppDispatch();

  const changeStateRoom = (room: IRoomState) => {
    console.log(room);
    dispatch(roomStateActions.setRoomState(room));
  };

  const resetStateRoom = (room: IRoomState) => {
    dispatch(membersActions.resetMembersScores());
    dispatch(roomStateActions.setRoomState(room));
  };

  // const roomShowHandler = (avgScore: number) => {
  //   dispatch(taskActions.updateTaskScore())
  // }

  useEffect(() => {
    socketService.on(SocketEvent.RoomShow, changeStateRoom);
    socketService.on(SocketEvent.RoomStart, changeStateRoom);
    socketService.on(SocketEvent.RoomFinish, resetStateRoom);
    return () => {
      socketService.off(SocketEvent.RoomShow, changeStateRoom);
      socketService.off(SocketEvent.RoomStart, changeStateRoom);
      socketService.off(SocketEvent.RoomFinish, resetStateRoom);
    };
  }, []);

  const handlerShow = () => {
    if (activeTask) {
      socketService.emit(SocketEvent.RoomShow, { id: activeTask.id });
    }
  };

  const handlerStart = () => {
    socketService.emit(SocketEvent.RoomStart, { id: roomId });
  };

  const handlerReset = () => {
    if (activeTask) {
      socketService.emit(SocketEvent.RoomFinish, { id: activeTask.id });
    }
  };

  return (
    <section className={styles.groupBtn}>
      <PrimaryButton
        className={classNames(styles.singleBtn,
          {
            [styles.disable]: !activeTask,
          })}
        onClick={handlerStart}
        disabled={!activeTask}
      >
        {NAMES_BTN.run}
      </PrimaryButton>
      <PrimaryButton
        className={styles.singleBtn}
        onClick={handlerShow}
      >
        {NAMES_BTN.show}
      </PrimaryButton>
      <SecondaryButton
        className={styles.singleBtn}
        onClick={handlerReset}
      >
        {NAMES_BTN.stop}
      </SecondaryButton>
    </section>
  );
};

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { PrimaryButton, SecondaryButton } from '@/components';
import styles from './Controls.module.scss';
import { socketService } from '@/services';
import { SocketEvent, StateRoomTitle } from '@/utils/enums';
import { roomStateSelectors, tasksSelectors, userSelectors } from '@/store/selectors';
import { IRoomState } from '@/utils/interfaces';
import { useAppDispatch } from '@/store';
import { membersActions, roomStateActions, taskActions } from '@/store/actions';

interface IRoomShow {
  roomState: IRoomState['roomState'];
  scoreTask: number
}

const NAMES_BTN = {
  run: 'Start',
  show: 'Show cards',
  stop: 'Reset',
};

export const Controls: React.FC = () => {
  const activeTask = useSelector(tasksSelectors.activeTask);
  const roomId = useSelector(roomStateSelectors.roomId);
  const role = useSelector(userSelectors.role)?.role;
  const roomState = useSelector(roomStateSelectors.roomState);
  const dispatch = useAppDispatch();

  const changeStateRoom = (room: IRoomState['roomState']) => {
    dispatch(roomStateActions.setRoomState(room));
  };

  const resetStateRoom = (room: IRoomState['roomState']) => {
    dispatch(membersActions.resetMembersScores());
    dispatch(roomStateActions.setRoomState(room));
  };

  const roomShowHandler = (state: IRoomShow) => {
    dispatch(roomStateActions.setRoomState(state.roomState));
    dispatch(taskActions.updateActiveTaskScore(state.scoreTask.toString()));
  };

  useEffect(() => {
    socketService.on(SocketEvent.RoomShow, roomShowHandler);
    socketService.on(SocketEvent.RoomStart, changeStateRoom);
    socketService.on(SocketEvent.RoomFinish, resetStateRoom);
    return () => {
      socketService.off(SocketEvent.RoomShow, roomShowHandler);
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
    <>
      { role
     && (
       <section className={styles.groupBtn}>
         <PrimaryButton
           className={classNames(styles.singleBtn,
             {
               [styles.disabled]: !activeTask || roomState !== StateRoomTitle.reset,
             })}
           onClick={handlerStart}
         >
           {NAMES_BTN.run}
         </PrimaryButton>
         <PrimaryButton
           className={classNames(styles.singleBtn,
             {
               [styles.disabled]: roomState !== StateRoomTitle.start,
             })}
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
     )}
    </>
  );
};

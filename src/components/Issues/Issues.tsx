import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { roomStateSelectors, tasksSelectors } from '@/store/selectors';
import styles from './Issues.module.scss';
import { useAppDispatch } from '@/store';
import { taskActions } from '@/store/actions/taskActions';
import { socketService } from '@/services';
import { SocketEvent } from '@/utils/enums';

export const Issues: React.FC = () => {
  const tasks = useSelector(tasksSelectors.tasks);
  const roomId = useSelector(roomStateSelectors.roomId);
  const dispatch = useAppDispatch();

  const updateTasks = () => {
    dispatch(taskActions.getTasks(roomId));
  };

  useEffect(() => {
    updateTasks();
  }, [roomId]);

  useEffect(() => {
    socketService.on(SocketEvent.TaskCreate, updateTasks);
    socketService.on(SocketEvent.TaskDelete, updateTasks);
    socketService.on(SocketEvent.TaskUpdateScore, updateTasks);
    socketService.on(SocketEvent.TaskUpdateActive, updateTasks);

    return () => {
      socketService.off(SocketEvent.TaskCreate, updateTasks);
      socketService.off(SocketEvent.TaskDelete, updateTasks);
      socketService.off(SocketEvent.TaskUpdateScore, updateTasks);
      socketService.off(SocketEvent.TaskUpdateActive, updateTasks);
    };
  }, []);

  return (
    <section className={styles.issues}>
      Issues
      {tasks.map((task) => (
        <div>{task.title}</div>
      ))}
    </section>
  );
};

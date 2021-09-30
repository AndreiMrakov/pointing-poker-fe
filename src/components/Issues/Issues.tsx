import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { roomStateSelectors, tasksSelectors } from '@/store/selectors';
import styles from './Issues.module.scss';
import { useAppDispatch } from '@/store';
import { taskActions } from '@/store/actions/taskActions';

export const Issues: React.FC = () => {
  const tasks = useSelector(tasksSelectors.tasks);
  const roomId = useSelector(roomStateSelectors.roomId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(taskActions.getTasks(roomId));
  }, [roomId]);

  return (
    <section className={styles.issues}>
      Issues
      {tasks.map((task) => (
        <div>{task.title}</div>
      ))}
    </section>
  );
};

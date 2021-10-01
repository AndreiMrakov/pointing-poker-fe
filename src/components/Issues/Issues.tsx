import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { roomStateSelectors, tasksSelectors } from '@/store/selectors';
import styles from './Issues.module.scss';
import { useAppDispatch } from '@/store';
import { taskActions } from '@/store/actions';
import { socketService } from '@/services';
import { SocketEvent } from '@/utils/enums';
import { ITaskFromBE } from '@/utils/interfaces';
import { TaskModel } from '@/models';

export const Issues: React.FC = () => {
  const tasks = useSelector(tasksSelectors.tasks);
  const roomId = useSelector(roomStateSelectors.roomId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(taskActions.getTasks(roomId));
  }, [roomId]);

  const createTaskHandler = (task: ITaskFromBE) => {
    const newTask = new TaskModel(task);
    dispatch(taskActions.addTask(newTask));
  };

  const deleteTaskHandler = (task: ITaskFromBE) => {
    const deletedTask = new TaskModel(task);
    dispatch(taskActions.deleteTask(deletedTask));
  };

  const updateScoreTaskHandler = (task: ITaskFromBE) => {
    const updatedTask = new TaskModel(task);
    dispatch(taskActions.updateTaskScore(updatedTask));
  };

  const updateActiveTaskHandler = (task: ITaskFromBE) => {
    const updatedTask = new TaskModel(task);
    dispatch(taskActions.updateTaskActive(updatedTask));
  };

  useEffect(() => {
    socketService.on(SocketEvent.TaskCreate, createTaskHandler);
    socketService.on(SocketEvent.TaskDelete, deleteTaskHandler);
    socketService.on(SocketEvent.TaskUpdateScore, updateScoreTaskHandler);
    socketService.on(SocketEvent.TaskUpdateActive, updateActiveTaskHandler);

    return () => {
      socketService.off(SocketEvent.TaskCreate, createTaskHandler);
      socketService.off(SocketEvent.TaskDelete, deleteTaskHandler);
      socketService.off(SocketEvent.TaskUpdateScore, updateScoreTaskHandler);
      socketService.off(SocketEvent.TaskUpdateActive, updateActiveTaskHandler);
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

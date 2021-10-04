import React, { MouseEventHandler, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { Task } from '@/components/Task';
import { roomStateSelectors, tasksSelectors } from '@/store/selectors';
import styles from './Issues.module.scss';
import { useAppDispatch } from '@/store';
import { taskActions } from '@/store/actions';
import { socketService } from '@/services';
import { SocketEvent } from '@/utils/enums';
import { ITaskFromBE } from '@/utils/interfaces';
import { TaskModel } from '@/models';
import { CreateTaskPanel } from '../CreateTaskPanel';

export const Issues: React.FC = () => {
  const [isIssuesShow, setIsIssuesShow] = useState(false);
  const tasks = useSelector(tasksSelectors.tasks);
  const roomId = useSelector(roomStateSelectors.roomId);
  const dispatch = useAppDispatch();

  const issuesListIconHandler = () => {
    setIsIssuesShow(!isIssuesShow);
  };

  const issuesWrapperHandler: MouseEventHandler = (e) => {
    const elem = e.target as HTMLElement;
    if (!elem.classList.contains(styles.issues)) {
      setIsIssuesShow(!isIssuesShow);
    }
  };

  useEffect(() => {
    dispatch(taskActions.getTasks());
  }, [roomId]);

  const createTaskHandler = (task: ITaskFromBE) => {
    const newTask = new TaskModel(task);
    dispatch(taskActions.addTask(newTask));
  };

  const deleteTaskHandler = (task: ITaskFromBE) => {
    dispatch(taskActions.deleteTask(task.id));
  };

  const updateScoreTaskHandler = (task: ITaskFromBE) => {
    const updatedTask = new TaskModel(task);
    dispatch(taskActions.updateTaskScore(updatedTask));
  };

  const updateActiveTaskHandler = (task: ITaskFromBE) => {
    dispatch(taskActions.updateTaskActive(task.id));
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
    <>
      <button
        className={styles.issuesListWrapper}
        onClick={issuesListIconHandler}
      >
        <div className={styles.issuesList} />
      </button>
      {isIssuesShow
      && (
        <button
          className={styles.issuesWrapper}
          onClick={issuesWrapperHandler}
          aria-hidden
        />
      )}
      <section className={classNames(
        styles.issues,
        {
          [styles.issues_show]: isIssuesShow,
        },
      )}
      >
        Issues
        <CreateTaskPanel />
        {tasks.map((task) => (
          <Task task={task} key={task.id} />
        ))}
      </section>
    </>
  );
};

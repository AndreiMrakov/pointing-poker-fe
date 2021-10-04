import React from 'react';
import classNames from 'classnames';
import styles from './Task.module.scss';
import { ITask } from '@/utils/interfaces';
import { Button, PrimaryButton } from '..';
import { socketService } from '@/services';
import { SocketEvent } from '@/utils/enums';

interface ITaskProps {
  task: ITask;
}

export const Task: React.FC<ITaskProps> = ({ task }) => {
  const setActiveTask = () => {
    if (!task.isActive) {
      socketService.emit(SocketEvent.TaskUpdateActive, task.id);
    }
  };

  const removeTask = () => {
    // eslint-disable-next-line no-restricted-globals
    const res = confirm('Are you want to delete this task?');
    if (res) {
      socketService.emit(SocketEvent.TaskDelete, task.id);
    }
  };

  return (
    <div className={classNames(
      styles.task, {
        [styles.task__active]: task.isActive === true,
      },
    )}
    >

      <div className={styles.task__head}>
        <h5>{task.id}</h5>
        <Button
          className={styles.remove__btn}
          onClick={removeTask}
        >
          <div className={styles.kick} />
        </Button>
      </div>
      <p className={styles.task__title}>{task.title}</p>
      <div className={styles.task__bottom}>
        <PrimaryButton
          className={styles.vote_btn}
          onClick={setActiveTask}
        >
          Voting now...
        </PrimaryButton>
        <p>{task.score}</p>
      </div>
    </div>
  );
};

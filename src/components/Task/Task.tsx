import React, { ChangeEventHandler, useState } from 'react';
import classNames from 'classnames';
import styles from './Task.module.scss';
import { ITask } from '@/utils/interfaces';
import { Button, Input, PrimaryButton } from '..';
import { socketService } from '@/services';
import { SocketEvent } from '@/utils/enums';

interface ITaskProps {
  task: ITask;
}

export const Task: React.FC<ITaskProps> = ({ task }) => {
  const [score, setScore] = useState(task.score);

  const setActiveTask = () => {
    if (!task.isActive) {
      socketService.emit(SocketEvent.TaskUpdateActive, { id: task.id });
    }
  };

  const removeTask = () => {
    // eslint-disable-next-line no-restricted-globals
    const res = confirm('Are you want to delete this task?');
    if (res) {
      socketService.emit(SocketEvent.TaskDelete, { id: task.id });
    }
  };

  const setTaskScore: ChangeEventHandler<HTMLInputElement> = (e) => {
    const newScore = e.target.value;
    setScore(newScore);
  };

  const updateTaskScore: ChangeEventHandler<HTMLInputElement> = () => {
    if (task.score !== score) {
      socketService.emit(SocketEvent.TaskUpdateScore, {
        id: task.id,
        score,
      });
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
          className={classNames(styles.vote_btn, {
            [styles.vote_btn__disabled]: task.isActive,
          })}
          onClick={setActiveTask}
        >
          Voting now...
        </PrimaryButton>
        <Input
          className={styles.score__input}
          value={score}
          onChange={setTaskScore}
          onBlur={updateTaskScore}
        />
      </div>
    </div>
  );
};

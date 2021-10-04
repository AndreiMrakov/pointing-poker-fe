import React, { useState } from 'react';
import classNames from 'classnames';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import styles from './Task.module.scss';
import { ITask } from '@/utils/interfaces';
import { Button, PrimaryButton } from '..';
import { socketService } from '@/services';
import { SocketEvent } from '@/utils/enums';
import { cards } from '@/mocks/cards';

interface ITaskProps {
  task: ITask;
}

export const Task: React.FC<ITaskProps> = ({ task }) => {
  const defaultScore = task.score === '0' ? '?' : task.score;
  const [score, setScore] = useState(defaultScore);

  const setActiveTask = () => {
    if (!task.isActive) {
      socketService.emit(SocketEvent.TaskUpdateActive, task.id);
    }
  };

  const removeTask = () => {
    // eslint-disable-next-line no-restricted-globals
    const res = confirm('Are you want to delete this task?');
    if (res) {
      socketService.emit(SocketEvent.TaskDelete, { id: task.id });
    }
  };

  const updateTaskScore = (e: SelectChangeEvent) => {
    const newScore = e.target.value;
    setScore(newScore);
    if (task.score !== newScore) {
      socketService.emit(SocketEvent.TaskUpdateScore, {
        id: task.id,
        score: newScore,
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
        <Select
          value={score}
          onChange={updateTaskScore}
        >
          {cards.map((option) => (
            <MenuItem value={option} key={option}>{option}</MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

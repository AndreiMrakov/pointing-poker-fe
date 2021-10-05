import React from 'react';
import classNames from 'classnames';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useSelector } from 'react-redux';
import styles from './Task.module.scss';
import { ITask } from '@/utils/interfaces';
import { Button, PrimaryButton } from '..';
import { socketService } from '@/services';
import { SocketEvent } from '@/utils/enums';
import { cards } from '@/mocks/cards';
import { userSelectors } from '@/store/selectors';

interface ITaskProps {
  task: ITask;
}

export const Task: React.FC<ITaskProps> = ({ task }) => {
  const role = useSelector(userSelectors.role)?.role;

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

  const updateTaskScore = (e: SelectChangeEvent) => {
    const newScore = e.target.value;
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
        [styles.task__active]: task.isActive,
      },
    )}
    >

      <div className={styles.task__head}>
        <h5>{task.id}</h5>
        {role === 'admin'
        && (
          <Button
            className={styles.remove__btn}
            onClick={removeTask}
          >
            <div className={styles.kick} />
          </Button>
        )}
      </div>
      <p className={styles.task__title}>{task.title}</p>
      <div className={styles.task__bottom}>
        <PrimaryButton
          className={classNames(styles.vote_btn, {
            [styles.vote_btn__disabled]: task.isActive || role !== 'admin',
          })}
          onClick={setActiveTask}
        >
          Voting now...
        </PrimaryButton>
        <Select
          value={task.score}
          onChange={updateTaskScore}
          disabled={role !== 'admin'}
        >
          {cards.map((option) => (
            <MenuItem value={option} key={option}>{option}</MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

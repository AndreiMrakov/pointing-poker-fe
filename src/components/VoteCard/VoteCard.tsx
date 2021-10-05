import React, {
  FC,
  MouseEvent,
} from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import styles from './VoteCard.module.scss';
import { roomStateSelectors, tasksSelectors, userSelectors } from '@/store/selectors';
import { socketService } from '@/services';
import { SocketEvent, StateRoomTitle } from '@/utils/enums';

interface IVoteCardProps {
  score: string;
}

export const VoteCard: FC<IVoteCardProps> = ({ score }) => {
  const activeTask = useSelector(tasksSelectors.activeTask);
  const userId = useSelector(userSelectors.userId);
  const roomState = useSelector(roomStateSelectors.roomState);
  const userScore = useSelector(userSelectors.score);

  function onCardClick(event: MouseEvent): void {
    const currentElem = event.target as HTMLElement;
    if (activeTask && currentElem.textContent) {
      socketService.emit(SocketEvent.UserVote, {
        userId,
        taskId: activeTask.id,
        score: currentElem.textContent,
      });
    }
  }

  return (
    <li
      className={classNames(styles.card,
        {
          [styles.unactive]:
          roomState !== StateRoomTitle.start,
          [styles.active]: score === userScore,
        })}
      onClick={onCardClick}
      aria-hidden="true"
    >
      {score}
    </li>
  );
};

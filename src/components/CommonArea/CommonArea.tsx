import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CardNest } from './CardNest';
import { Table } from './Table';
import styles from './CommonArea.module.scss';
import { useAppDispatch } from '@/store';
import { IUserScoreFromBE } from '@/utils/interfaces';
import { ScoreModel } from '@/models';
import { membersActions } from '@/store/actions';
import { socketService } from '@/services';
import { SocketEvent } from '@/utils/enums';
import { userSelectors } from '@/store/selectors';

export const CommonArea: React.FC = () => {
  const dispatch = useAppDispatch();
  const score = useSelector(userSelectors.score);
  const name = useSelector(userSelectors.name);

  const subscribeScore = useCallback((scoreFromBE: IUserScoreFromBE) => {
    const newUser = new ScoreModel(scoreFromBE);
    dispatch(membersActions.updateMemberScore(newUser));
  }, []);

  useEffect(() => {
    socketService.on(SocketEvent.UserVote, subscribeScore);
    return () => {
      socketService.off(SocketEvent.UserVote, subscribeScore);
    };
  }, []);

  return (
    <section>
      <Table />
      <CardNest
        score={score}
        className={styles.cardMargin}
        name={name}
      />
    </section>
  );
};

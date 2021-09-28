import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './User.module.scss';
import { CardNest } from '@/components';
import { IUser } from '@/utils/interfaces';

interface IUserProps {
  user: IUser
}

export const User: FC<IUserProps> = ({ user }) => {
  const role = user.role || 'spectator';

  return (
    <li className={styles.item}>
      <div className={classNames(
        styles.user,
        {
          [styles.user__admin]: role === 'admin',
          [styles.user__spectator]: role === 'spectator',
        },
      )}
      >
        <div className={styles.name} />
        <div className={styles.kick} />
      </div>
      <CardNest
        selectedCardValue={user.score || ''}
        userRole={user.role}
      />
    </li>
  );
};

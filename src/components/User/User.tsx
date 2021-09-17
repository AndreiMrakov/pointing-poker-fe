import React, { FC, useMemo } from 'react';
import classNames from 'classnames';
import styles from './User.module.scss';
import { getAvatar } from '@/helpers/getAvatar';
import { CardNest } from '@/components/CommonArea/CardNest';
import { IUser } from '@/interfaces';

interface IUserProps {
  user: IUser
}

export const User: FC<IUserProps> = ({ user }) => {
  const styleAvatar = useMemo(
    () => getAvatar(user.avatar),
    [user.avatar],
  );

  return (
    <li className={styles.item}>
      <div className={classNames(
        styles.user,
        {
          [styles.user__admin]: user.role === 'admin',
          [styles.user__spectator]: user.role === 'spectator',
        },
      )}
      >
        <div style={styleAvatar} className={styles.avatar} />
        <div className={styles.name}>
          {`${user.name} ${user.surname}`}
          <div className={styles.job}>
            {user.job}
          </div>
        </div>
        <div className={styles.kick} />
      </div>
      <CardNest
        isCardOpened={user.isCardOpened}
        selectedCardValue={user.currentScore}
        userType={user.role}
      />
    </li>
  );
};

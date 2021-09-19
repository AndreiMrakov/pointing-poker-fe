<<<<<<< HEAD
import React, { FC, useMemo } from 'react';
=======
import React, { FC } from 'react';
>>>>>>> 61e97f3e70d29c82bdc13f532c04cdea20e4d4d6
import classNames from 'classnames';
import styles from './User.module.scss';
import { CardNest } from '@/components/CommonArea/CardNest';
import { IUser } from '@/interfaces';

interface IUserProps {
  user: IUser
}

export const User: FC<IUserProps> = ({ user }) => {
<<<<<<< HEAD
  const styleAvatar = useMemo(
    () => getAvatar(user.avatar),
    [user.avatar],
  );

=======
>>>>>>> 61e97f3e70d29c82bdc13f532c04cdea20e4d4d6
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
<<<<<<< HEAD
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
=======
        <div className={styles.name} />
        <div className={styles.kick} />
      </div>
      <CardNest
>>>>>>> 61e97f3e70d29c82bdc13f532c04cdea20e4d4d6
        selectedCardValue={user.score || ''}
        userRole={user.role}
      />
    </li>
  );
};

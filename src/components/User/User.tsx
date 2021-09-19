import React, { FC } from 'react';
import styles from './User.module.scss';
import { CardNest } from '@/components/CommonArea/CardNest';
import { IUser } from '@/utils/interfaces';

interface IUserProps {
  user: IUser
}

export const User: FC<IUserProps> = ({ user }) => (
  <li className={styles.item}>
    <div className={styles.user}>
      <div className={styles.name} />
      <div className={styles.kick} />
    </div>
    <CardNest
      selectedCardValue={user.score || ''}
      userRole={user.role}
    />
  </li>
);

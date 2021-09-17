import React, { ReactNode } from 'react';
import { IUser } from '@/interfaces';
import styles from '@/components/User/User.module.scss';

export const getUserCard = (user: IUser, avatar: ReactNode) => {
  switch (user.role) {
    case 'admin':
      return (
        <div className={`${styles.user} ${styles.user__admin}`}>
          {avatar}
          <div className={styles.name}>
            {`${user.name} ${user.surname}`}
            <div className={styles.job}>
              {user.job}
            </div>
            <div className={styles.role}>
              {user.role}
            </div>
          </div>
          <div className={styles.kick} />
        </div>
      );
    case 'spectator':
      return (
        <div className={`${styles.user} ${styles.user__spectator}`}>
          {avatar}
          <div className={styles.name}>
            {`${user.name} ${user.surname}`}
            <div className={styles.job}>
              {user.job}
            </div>
            <div className={styles.role}>
              {user.role}
            </div>
          </div>
          <div className={styles.kick} />
        </div>
      );
    default:
      return (
        <div className={styles.user}>
          {avatar}
          <div className={styles.name}>
            {`${user.name} ${user.surname}`}
            <div className={styles.job}>
              {user.job}
            </div>
            <div className={styles.role}>
              {user.role}
            </div>
          </div>
          <div className={styles.kick} />
        </div>
      );
  }
};

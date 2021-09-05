import React, { FC } from "react";
import styles from '@/styles/users.module.scss';
import defaultAvatar from '@/assets/images/default-avatar.svg';
import { UserType } from "@/untils/types";

type Props = {
  user: UserType;
};

export const User: FC<Props> = ({ user }) => {
  const { name, surname, job, avatar, currentScore, type } = user;

  const defaultScore = type === 'observer' ? '-' : 'in progress';

  const avatarUser = avatar ? avatar : defaultAvatar;

  const styleAvatar = {
    backgroundImage: `url(${avatarUser})`,
  };

  return (
    <li className={styles.item}>
      <div className={styles.score}>{currentScore ? currentScore : defaultScore}</div>
      <div className={styles.user}>
        <div style={styleAvatar} className={styles.avatar} />
        <div className={styles.name}>
          {name} {surname}
          <div className={styles.job}>{job}</div>
        </div>
        <div className={styles.kick} />
      </div>
    </li>
  );
};

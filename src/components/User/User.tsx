import React, { FC, useMemo } from "react";
import styles from './User.module.scss';
import { getAvatar } from "@/helpers/getAvatar";
import { CardNest } from "@/components/CommonArea/CardNest";

interface IUser {
  user: {
    id: string;
    type: string;
    name: string;
    surname: string;
    job: string;
    avatar: string;
    currentScore: string;
    isCardOpened: boolean;
  }
};

export const User: FC<IUser> = ({ user }) => {
  const styleAvatar = useMemo(
    () => getAvatar(user.avatar),
    [user.avatar]
  );

  return (
    <li className={styles.item}>
      <div className={styles.user}>
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
        className={styles.cardStyle}
        isCardOpened={user.isCardOpened}
        selectedCardValue={user.currentScore}
        userType={user.type}
      />
    </li>
  );
};

import React, { FC } from "react";
import styles from './User.module.scss';
import { UserType } from "@/untils/types/UserType";
import { scoreAnalizer } from "@/helpers/scoreAnalizer";
import { getAvatar } from "@/helpers/getAvatar";

type Props = {
  user: UserType;
};

export const User: FC<Props> = ({ user }) => {
  const { name, surname, job, avatar, currentScore, type } = user;

  const score = scoreAnalizer(type, currentScore);

  const styleAvatar = getAvatar(avatar);

  return (
    <li className={styles.item}>
      <div className={styles.score}>
        {score}
      </div>
      <div className={styles.user}>
        <div style={styleAvatar} className={styles.avatar} />
        <div className={styles.name}>
          {`${name} ${surname}`}
          <div className={styles.job}>
            {job}
          </div>
        </div>
        <div className={styles.kick} />
      </div>
    </li>
  );
};

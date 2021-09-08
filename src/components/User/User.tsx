import React, { FC, useMemo } from "react";
import styles from './User.module.scss';
import { UserType } from "@/untils/types/UserType";
import { scoreAnalizer } from "@/helpers/scoreAnalizer";
import { getAvatar } from "@/helpers/getAvatar";

type Props = {
  user: UserType;
};

export const User: FC<Props> = ({ user }) => {
  const score = useMemo(
    () => scoreAnalizer(user.type, user.currentScore),
    [user.type, user.currentScore]
  );

  const styleAvatar = useMemo(
    () => getAvatar(user.avatar || undefined),
    [user.avatar]
  );

  return (
    <li className={styles.item}>
      <div className={styles.score}>
        {score}
      </div>
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
    </li>
  );
};

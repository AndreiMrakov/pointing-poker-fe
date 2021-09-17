import React, { FC, useMemo } from 'react';
import styles from './User.module.scss';
import { getAvatar } from '@/helpers/getAvatar';
import { CardNest } from '@/components/CommonArea/CardNest';
import { IUser } from '@/interfaces';
import { getUserCard } from '../../helpers/getUserCard';

interface IUserProps {
  user: IUser
}

export const User: FC<IUserProps> = ({ user }) => {
  const styleAvatar = useMemo(
    () => getAvatar(user.avatar),
    [user.avatar],
  );

  const avatar = <div style={styleAvatar} className={styles.avatar} />;
  const userCard = getUserCard(user, avatar);

  return (
    <li className={styles.item}>
      {userCard}
      <CardNest
        isCardOpened={user.isCardOpened}
        selectedCardValue={user.currentScore}
        userType={user.type}
      />
    </li>
  );
};

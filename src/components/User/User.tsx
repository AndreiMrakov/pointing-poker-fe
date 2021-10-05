import React, { FC } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import styles from './User.module.scss';
import { CardNest } from '@/components';
import { IUser } from '@/utils/interfaces';
import { roomStateSelectors, userSelectors } from '@/store/selectors';
import { socketService } from '@/services';
import { SocketEvent } from '@/utils/enums';

interface IUserProps {
  user: IUser
}

export const User: FC<IUserProps> = ({ user }) => {
  const { role, name, userId } = user;
  const mainRole = useSelector(userSelectors.role)?.role;
  const roomId = useSelector(roomStateSelectors.roomId);

  const kickHandler = () => {
    socketService.emit(SocketEvent.UserKick, { roomId, userId });
  };

  return (
    <li className={styles.item}>
      <div className={classNames(
        styles.user,
        {
          [styles.user__admin]: role === 'admin',
          [styles.user__spectator]: !role,
        },
      )}
      >
        <div className={styles.name}>
          {name}
        </div>
        {mainRole === 'admin'
        && role !== 'admin'
        && (
          <button
            className={styles.kick}
            onClick={kickHandler}
            aria-hidden
          />
        )}
      </div>
      <CardNest
        score={user.score || ''}
        userRole={role}
      />
    </li>
  );
};

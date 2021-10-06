import React, { FC } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import styles from './User.module.scss';
import { CardNest, PrimaryButton } from '@/components';
import { IUser } from '@/utils/interfaces';
import { roomStateSelectors, userSelectors } from '@/store/selectors';
import { socketService } from '@/services';
import { SocketEvent } from '@/utils/enums';

interface IUserProps {
  user: IUser
}

export const User: FC<IUserProps> = ({ user }) => {
  const {
    role, name, userId, score,
  } = user;
  const mainRole = useSelector(userSelectors.role);
  const roomId = useSelector(roomStateSelectors.roomId);

  const kickHandler = () => {
    socketService.emit(SocketEvent.UserKick, { roomId, userId });
  };

  const approveUser = () => {
    const updatedUser = {
      userId: user.userId,
      roomId,
      role: 'member',
    };
    socketService.emit(SocketEvent.UserAddRole, updatedUser);
  };

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
        <div className={styles.name}>
          {name}
        </div>
        {mainRole === 'admin' && role === 'spectator'
        && (
          <PrimaryButton
            onClick={approveUser}
            className={styles.approve__btn}
          >
            Approve
          </PrimaryButton>
        )}
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
        score={score}
        userRole={role}
      />
    </li>
  );
};

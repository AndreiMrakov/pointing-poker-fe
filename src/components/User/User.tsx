import React, { FC } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import styles from './User.module.scss';
import { CardNest, PrimaryButton } from '@/components';
import { IUser, IUserFromBE } from '@/utils/interfaces';
import { roomStateSelectors, userSelectors } from '@/store/selectors';
import { socketService } from '@/services';
import { SocketEvent } from '@/utils/enums';
import { userActions } from '@/store/actions';

interface IUserProps {
  user: IUser
}

export const User: FC<IUserProps> = ({ user }) => {
  const { role } = user;
  const clientRole = useSelector(userSelectors.role);
  const roomId = useSelector(roomStateSelectors.roomId);
  const dispatch = useDispatch();

  const updateUserRole = () => {
    dispatch(userActions.addRole('member'));
  };

  const approveUser = () => {
    const updatedUser = {
      userId: user.userId,
      roomId,
      role: 'member',
    };
    socketService.emit(SocketEvent.UserAddRole, updatedUser);
    socketService.on(SocketEvent.UserAddRole, updateUserRole);
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
          {user.name}
        </div>
        <PrimaryButton
          onClick={approveUser}
          className={classNames(
            styles.approve__btn,
            {
              [styles.approve__btn_disabled]: clientRole !== 'admin' || role === 'member',
            },
          )}
        >
          Approve
        </PrimaryButton>
        <div className={styles.kick} />
      </div>
      <CardNest
        selectedCardValue={user.score || ''}
        userRole={user.role}
      />
    </li>
  );
};

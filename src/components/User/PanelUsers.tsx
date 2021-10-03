import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './User.module.scss';
import { socketService } from '@/services';
import { User } from '@/components';
import { SocketEvent } from '@/utils/enums';
import { UserModel } from '@/models';
import { IUserFromBE } from '@/utils/interfaces';
import { useAppDispatch } from '@/store';
import { membersActions } from '@/store/actions';
import { membersSelectors } from '@/store/selectors';

export const PanelUsers: React.FC = () => {
  const users = useSelector(membersSelectors.members);
  const dispatch = useAppDispatch();

  const subscribeJoin = useCallback((user: IUserFromBE) => {
    const newUser = new UserModel(user);
    dispatch(membersActions.addRoomMember(newUser));
  }, []);

  const subscribeLeave = useCallback((id: number) => {
    dispatch(membersActions.deleteRoomMember(id.toString()));
  }, []);

  useEffect(() => {
    socketService.on(SocketEvent.JoinUser, subscribeJoin);
    socketService.on(SocketEvent.LeaveUser, subscribeLeave);
    return () => {
      socketService.off(SocketEvent.JoinUser, subscribeJoin);
      socketService.off(SocketEvent.LeaveUser, subscribeLeave);
    };
  }, []);

  return (
    <ul className={styles.listUsers}>
      {users.map((user) => <User user={user} key={user.userId} />)}
    </ul>
  );
};

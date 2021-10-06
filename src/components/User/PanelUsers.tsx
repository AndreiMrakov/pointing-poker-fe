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

  const subscribeRoomAdmin = useCallback((id: number) => {
    dispatch(membersActions.updateRoomAdmin(id.toString()));
  }, []);

  const subscribeUpdateMemberRole = (user: IUserFromBE) => {
    dispatch(membersActions.updateMemberRole(user.id.toString()));
  };

  useEffect(() => {
    socketService.on(SocketEvent.RoomJoin, subscribeJoin);
    socketService.on(SocketEvent.RoomLeave, subscribeLeave);
    socketService.on(SocketEvent.UserKick, subscribeLeave);
    socketService.on(SocketEvent.RoomAdmin, subscribeRoomAdmin);
    socketService.on(SocketEvent.UserAddRole, subscribeUpdateMemberRole);
    return () => {
      socketService.off(SocketEvent.RoomJoin, subscribeJoin);
      socketService.off(SocketEvent.RoomLeave, subscribeLeave);
      socketService.off(SocketEvent.UserKick, subscribeLeave);
      socketService.off(SocketEvent.RoomAdmin, subscribeRoomAdmin);
      socketService.off(SocketEvent.UserAddRole, subscribeUpdateMemberRole);
    };
  }, []);

  return (
    <ul className={styles.listUsers}>
      {users.map((user) => <User user={user} key={user.userId} />)}
    </ul>
  );
};

import React, { useCallback, useEffect, useState } from 'react';
import { IRoomMember } from '@/utils/interfaces';
import styles from './User.module.scss';
import { socketService } from '@/services/socketService';
import { User } from './User';
import { SocketEvent } from '@/utils/enums';
import { RoomMemberModel } from '@/models/UserModel';

export const PanelUsers: React.FC = () => {
  const [users, setUsers] = useState<IRoomMember[]>([]);

  const subscribeJoin = useCallback((user: IRoomMember) => {
    const newUser = new RoomMemberModel(user);
    setUsers((usrs) => [...usrs, newUser]);
  }, []);

  const subscribeLeave = useCallback((id: string) => {
    setUsers((usrs) => usrs.filter((usr) => usr.roomUserId !== id));
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
      {users.map((user) => <User user={user} key={user.roomUserId} />)}
    </ul>
  );
};

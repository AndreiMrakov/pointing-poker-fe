import React, { useCallback, useEffect, useState } from 'react';
import { IUser } from '@/interfaces';
import styles from './User.module.scss';
import { socketService } from '@/services/socketService';
import { User } from './User';
import { SocketEvent } from '@/utils/enums';
import { UserModel } from '@/models/UserModel';

export const PanelUsers: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const subscribeJoin = useCallback((user: IUser) => {
    const newUser = new UserModel(user);
    setUsers((usrs) => [...usrs, newUser]);
  }, []);

  const subscribeLeave = useCallback((id: string) => {
    setUsers((usrs) => usrs.filter((usr) => usr.id !== id));
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
      {users.map((user) => <User user={user} key={user.id} />)}
    </ul>
  );
};

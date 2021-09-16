import React, { useCallback, useEffect, useState } from 'react';
import { IUser } from '@/interfaces';
import { SingleUser } from '@/helpers/getSingleUser';
import styles from './User.module.scss';
import { socketService } from '@/services/socketService';
import { User } from './User';
import { SocketEvent } from '@/utils/enums';

export const PanelUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const subscribeJoin = useCallback((msg: string) => {
    const newUser = new SingleUser(msg);
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

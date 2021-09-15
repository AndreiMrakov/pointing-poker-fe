import React, { useEffect, useState } from 'react';
import { IUser } from '@/interfaces';
import { SingleUser } from '@/helpers/getSingleUser';
import styles from './User.module.scss';
import { SocketEvents, socketService } from '@/WsService';
import { User } from './User';

export const PanelUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    socketService.on(SocketEvents.joinUser, (msg) => {
      const newUser = new SingleUser(msg);
      setUsers((usrs) => [...usrs, newUser]);
    });

    socketService.on(SocketEvents.leaveUser, (id) => {
      setUsers((usrs) => usrs.filter((usr) => usr.id !== id));
    });
  }, []);

  return (
    <ul className={styles.listUsers}>
      {users.map((user) => <User user={user} key={user.id} />)}
    </ul>
  );
};

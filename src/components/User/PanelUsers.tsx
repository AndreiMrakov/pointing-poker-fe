import React, { useEffect, useState } from 'react';
import { IUser } from '@/interfaces';
import { SingleUser } from '@/helpers/getSingleUser';
import styles from './User.module.scss';
import { JOIN_USER, LEAVE_USER, socketService } from '@/WsService';
import { User } from './User';

export const PanelUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    socketService.on(JOIN_USER, (msg) => {
      const newUser = new SingleUser(msg);
      setUsers((usrs) => [...usrs, newUser]);
    });

    socketService.on(LEAVE_USER, (id) => {
      setUsers((usrs) => usrs.filter((usr) => usr.id !== id));
    });
  }, []);

  return (
    <ul className={styles.listUsers}>
      {users.map((user) => <User user={user} key={user.id} />)}
    </ul>
  );
};

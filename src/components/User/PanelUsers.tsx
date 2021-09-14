import React from 'react';
import { User } from './User';
import styles from './User.module.scss';
import users from '@/mocks/users.json';

export const PanelUsers = () => (
  <ul className={styles.listUsers}>
    {users.map((user) => <User user={user} key={user.id} />)}
  </ul>
);

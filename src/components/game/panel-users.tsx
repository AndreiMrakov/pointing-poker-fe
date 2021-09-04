import React from "react";
import User from "./user";
import { UserType } from "./type";
import styles from '@/styles/users.module.scss';

const mockUser = (id: string, name: string, surname: string, job: string) => {
  return {
    id,
    type: 'player',
    name,
    surname,
    job,
    avatar: '',
    currentScore: null,

  }
}
const PanelUsers = () => {
  const listUsers: UserType[] = [
    mockUser('1', 'Pradd', 'Praddich', 'web-developer'),
    mockUser('2', 'Lena', 'Ivaaaan', 'Java-developer'),
    mockUser('3', 'Alex', 'Ohohoho ', 'team lead'),
    mockUser('4', 'Jone', 'gggg', 'developer'),
    mockUser('5', 'Ivan', 'tttree', ''),
  ];

  return (
    <ul className={styles.listUsers}>
      <li className={styles.itemTitle}>
        <h3>score:</h3>
        <h3>player:</h3>
      </li>
      {listUsers.map((user: UserType) => <User user={user} key={user.id} />)}
    </ul>
  );
};

export default PanelUsers;

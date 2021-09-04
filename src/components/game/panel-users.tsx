import React from "react";
import User from "./user";
import { UserType } from "./type";

const mockUser = (id: string, name: string) => {
  return {
    id: id,
    name: name,
    surname: '',
    job: '',
    avatar: '',
    currentScore: null,

  }
}
const PanelUsers = () => {
  const listUsers: UserType[] = [
    mockUser('1', 'Pradd'),
    mockUser('2', 'Lena'),
    mockUser('3', 'Alex'),
    mockUser('4', 'Jone'),
    mockUser('5', 'Ivan'),
  ];

  return (
    <ul>
      {listUsers.map((user: UserType) => <User user={user} key={user.id} />)}
    </ul>
  );
};

export default PanelUsers;

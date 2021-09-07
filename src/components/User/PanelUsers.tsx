import React from "react";
import { User } from "./User";
import styles from "./User.module.scss";
import users from "@/store/users.json";
import { UserType } from "@/untils/types/UserType";

export const PanelUsers = () => {
  const listUsers: UserType[] = users.users;

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

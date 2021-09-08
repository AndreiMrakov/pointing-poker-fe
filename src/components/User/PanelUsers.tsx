import React from "react";
import { User } from "./User";
import styles from "./User.module.scss";
import users from "@/mocks/users.json";

export const PanelUsers = () => {
  return (
    <ul className={styles.listUsers}>
      <li className={styles.itemTitle}>
        <h3>score:</h3>
        <h3>player:</h3>
      </li>
      {users.map((user) => <User user={user} key={user.id} />)}
    </ul>
  );
};

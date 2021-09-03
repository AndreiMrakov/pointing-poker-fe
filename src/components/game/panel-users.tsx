import React from "react";
import User from "./user";
import { UserType } from "./type";

const PanelUsers = () => {
  //TODO: get list from axios
  const listUsers: UserType[] = [];

  return (
    <ul>
      {listUsers.map((user: UserType) => <User user={user} key={user.id} />)}
    </ul>
  );
};

export default PanelUsers;

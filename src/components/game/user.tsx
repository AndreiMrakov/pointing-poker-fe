import React, { FC } from "react";
import { UserType } from "./type";

type Props = {
  user: UserType;
};

const User: FC<Props> = ({ user }) => {
  const { name } = user;

  return <div>{name}</div>;
};
export default User;

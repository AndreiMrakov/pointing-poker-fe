import React, { FC } from "react";
import "./Button.scss";

type ButtonProps = {
  name: string;
  myStyles?: "btn-primary" | "btn-secondary";
  type?: "button" | "reset" | "submit";
  callback: () => void;
};

export const Button: FC<ButtonProps> = ({ name, type = "button", myStyles, callback }) => {
  return (
    <button type={type} className={`btn ${myStyles}`} onClick={callback}>
      {name}
    </button>
  );
};

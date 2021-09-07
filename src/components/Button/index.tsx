import React, { FC } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";

type ButtonProps = {
  name: string;
  myStyles?: "btn-primary" | "btn-secondary";
  type?: "button" | "reset" | "submit";
  callback: () => void;
};

const cx = classNames.bind(styles);

export const Button: FC<ButtonProps> = ({ name, type = "button", myStyles, callback }) => {
  const className = cx({
    btn: true,
    btnPrimary: myStyles === "btn-primary",
    btnSecondary: myStyles === "btn-secondary",
  });

  return (
    <button type={type} className={className} onClick={callback}>
      {name}
    </button>
  );
};

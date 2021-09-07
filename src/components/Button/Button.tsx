import React, { FC } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";

type ButtonProps = {
  name: string;
  myStyles: string;
  type?: "button" | "reset" | "submit";
  onClick: () => void;
};

const cx = classNames.bind(styles);

export const Button: FC<ButtonProps> = ({ name, type = "button", myStyles, onClick }) => {
  const className = cx({
    btnPrimary: myStyles === "btn-primary",
    btnSecondary: myStyles === "btn-secondary",
  });

  return (
    <button type={type} className={classNames(styles.btn, className)} onClick={onClick}>
      {name}
    </button>
  );
};

import React, { FC } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  name: string;
  myStyles?: "btn-primary" | "btn-secondary";
  type?: "button" | "reset" | "submit";
};

export const Button: FC<ButtonProps> = ({ name, type = "button", myStyles }) => {
  const btnStyle = myStyles === 'btn-primary' ? styles.btnPrimary : styles.btnSecondary;

  return (
    <button type={type} className={`${styles.btn} ${btnStyle}`}>
      {name}
    </button>
  );
};

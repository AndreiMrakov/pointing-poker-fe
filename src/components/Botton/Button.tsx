import React, { FC } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  name: string;
  myStyles?: "btn-primary" | "btn-secondary";
  type?: "button" | "reset" | "submit";
  callback: () => void;
};

export const Button: FC<ButtonProps> = ({ name, type = "button", myStyles, callback }) => {
  const btnStyle = myStyles === 'btn-primary' ? styles.btnPrimary : styles.btnSecondary;

  return (
    <button type={type} className={`${styles.btn} ${btnStyle}`} onClick={callback}>
      {name}
    </button>
  );
};

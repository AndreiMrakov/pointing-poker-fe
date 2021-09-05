import React, { FC } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  name: string;
  className?: string;
  type?: "button" | "reset" | "submit";
};

export const Button: FC<ButtonProps> = ({ name, type = "button", className }) => {
  return (
    <button type={type} className={`${styles.btn} ${className}`}>
      {name}
    </button>
  );
};

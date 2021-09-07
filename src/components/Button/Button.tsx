import React, { FC, ReactNode } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";

export type ButtonProps = {
  children: ReactNode;
  className?: string;
  type?: "button" | "reset" | "submit";
  onClick: () => void;
};

export const Button: FC<ButtonProps> = ({ children, type = "button", className, onClick }) => {
  return (
    <button 
      type={type} 
      className={classNames(styles.btn, className)} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

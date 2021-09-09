import React, { FC } from "react";
import { Button, ButtonProps } from "./Button";
import classNames from "classnames";
import styles from "./Button.module.scss";

export const PrimaryButton: FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Button
      className={classNames(styles.btnPrimary, className)}
      {...props}
    >
      {children}
    </Button>
  );
};

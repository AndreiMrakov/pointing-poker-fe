import React, { FC } from "react";
import { Button, ButtonProps } from "./Button";
import classNames from "classnames";
import styles from "./Button.module.scss";

export const SecondaryButton: FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Button
      className={classNames(styles.btnSecondary, className)}
      {...props}
    >
      {children}
    </Button>
  );
};

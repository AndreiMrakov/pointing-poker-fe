import React, { FC } from 'react';
import classNames from 'classnames';
import { Button, ButtonProps } from './Button';
import styles from './Button.module.scss';

export const PrimaryButton: FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => (
  <Button
    className={classNames(styles.btnPrimary, className)}
    {...props}
  >
    {children}
  </Button>
);

import React, { FC } from 'react';
import classNames from 'classnames';
import { Button, ButtonProps } from './Button';
import styles from './Button.module.scss';

export const SecondaryButton: FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => (
  <Button
    className={classNames(styles.btnSecondary, className)}
    {...props}
  >
    {children}
  </Button>
);

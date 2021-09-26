import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  type = 'button',
  className,
  onClick,
}) => (
  <button
    type={type}
    className={classNames(styles.btn, className)}
    onClick={onClick}
  >
    {children}
  </button>
);

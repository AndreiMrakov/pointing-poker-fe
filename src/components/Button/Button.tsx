import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  onClick?: () => void;
  disabled?: boolean
}

export const Button: FC<ButtonProps> = ({
  children,
  type = 'button',
  className,
  disabled,
  onClick,
}) => (
  <button
    type={type}
    className={classNames(styles.btn, className)}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

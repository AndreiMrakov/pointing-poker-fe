import React, { ChangeEventHandler } from 'react';
import classNames from 'classnames';
import styles from './Input.module.scss';

interface IInputProps {
  type?: string;
  name?: string;
  value?: string;
  className?: string;
  label?: string;
  onChange?: ChangeEventHandler;
  required?: boolean
}

export const Input: React.FC<IInputProps> = ({
  type = 'text',
  name,
  className,
  label,
  onChange,
  value,
  required,
}) => (
  <input
    name={name}
    type={type}
    required={required}
    className={classNames(styles.input, className)}
    onChange={onChange}
    value={value}
    placeholder={label}
  />
);

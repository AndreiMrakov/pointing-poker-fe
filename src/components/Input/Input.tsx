import React, { ChangeEventHandler } from 'react';
import classNames from 'classnames';
import styles from './Input.module.scss';

interface IImportProps {
  type: string;
  name?: string;
  value?: string;
  className?: string;
  label?: string;
  onChange?: ChangeEventHandler;
}

export const Input: React.FC<IImportProps> = ({
  type, name, className, label, onChange, value,
}) => (
  <label htmlFor={name} className={styles.label}>
    {label}
    <input
      name={name}
      type={type}
      className={classNames(styles.input, className)}
      id={label}
      onChange={onChange}
      value={value}
    />
  </label>
);

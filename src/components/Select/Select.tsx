import classNames from "classnames";
import React, { ChangeEventHandler } from "react";
import styles from "./Select.module.scss";

interface ISelectProps {
  option: string[];
  className?: string;
  name: string;
  value: string;
  label?:string;
  onChange?: ChangeEventHandler;
};

export const Select: React.FC<ISelectProps> = ({ option, name, className, label, value, onChange }) => {
  return (
    <label htmlFor={name} className={styles.label}>
      {label}
      <select 
        className={classNames(styles.select, className)}
        name={name}
        value={value}
        onChange={onChange}
      >
        {option.map((value) => <option value={value} key={value}>{value}</option>)}
      </select>
    </label>
  );
};

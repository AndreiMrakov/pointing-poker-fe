import React from 'react';
import styles from './Message.module.scss';

interface IMessage {
  name: string;
  text: string
}

export const Message: React.FC<IMessage> = ({ name, text }) => (
  <div className={styles.messageWrapper}>
    <h3 className={styles.userName}>
      {name}
      :
    </h3>
    <div className={styles.messageText}>{text}</div>
  </div>
);

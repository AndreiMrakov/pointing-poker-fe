import React from 'react';
import styles from './Message.module.scss';

interface IMessage {
  userName: string;
  message: string
}

export const Message: React.FC<IMessage> = ({ userName, message }) => (
  <div className={styles.messageWrapper}>
    <h3 className={styles.userName}>
      {userName}
      :
    </h3>
    <div className={styles.messageText}>{message}</div>
  </div>
);

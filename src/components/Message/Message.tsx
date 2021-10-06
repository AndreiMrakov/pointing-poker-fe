import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { membersSelectors, userSelectors } from '@/store/selectors';
import styles from './Message.module.scss';

interface IMessage {
  name: string;
  text: string;
  userId: string;
}

export const Message: React.FC<IMessage> = ({ name, text, userId }) => {
  const users = useSelector(membersSelectors.members);
  const userRole = users.find((user) => user.userId === userId)?.role;
  const thisUserName = useSelector(userSelectors.name);

  return (
    <div className={styles.messageWrapper}>
      <div className={classNames(styles.admin__icon_disabled, {
        [styles.admin__icon]: userRole === 'admin',
      })}
      />
      <h3 className={classNames(styles.userName, {
        [styles.userName__admin]: userRole === 'admin',
        [styles.userName__user]: thisUserName === name && userRole !== 'admin',
      })}
      >
        {name}
        :
      </h3>
      <div className={styles.messageText}>{text}</div>
    </div>
  );
};

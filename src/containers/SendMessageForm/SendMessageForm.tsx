import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { socketService } from '@/services';
import { roomStateSelectors, userSelectors } from '@/store/selectors';
import { SendMessageModel } from '@/models';
import { SocketEvent } from '@/utils/enums';
import styles from './SendMessageForm.module.scss';
import { PrimaryButton } from '@/components';

export const SendMessageForm: React.FC = () => {
  const [text, setText] = useState('');
  const userId = useSelector(userSelectors.userId);
  const roomId = useSelector(roomStateSelectors.roomId);

  function sendMessageHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const newMessage = new SendMessageModel({
      text,
      roomId,
      userId,
    });
    socketService.emit(SocketEvent.MessageCreate, newMessage);
    setText('');
  };

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <input
        type="text"
        value={text}
        className={styles.messageInput}
        placeholder="Enter your message"
        onChange={sendMessageHandler}
      />
      <PrimaryButton
        className={classNames(styles.submit, {
          [styles.disabled]: text.length === 0,
        })}
        type="submit"
        // disabled={!!text}
      >
        Send message
      </PrimaryButton>
    </form>
  );
};

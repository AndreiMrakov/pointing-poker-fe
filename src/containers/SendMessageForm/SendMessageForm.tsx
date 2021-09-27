import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { socketService } from '@/services/socketService';
import { roomStateSelectors, userSelectors } from '@/store/selectors';
import { SendMessageModel } from '@/models/SendMessageModel/SendMessageModel';
import { SocketEvent } from '@/utils/enums';
import styles from './SendMessageForm.module.scss';
import { PrimaryButton } from '@/components/Button';

export const SendMessageForm: React.FC = () => {
  const [text, setText] = useState('');
  const userId = useSelector(userSelectors.userId);
  const roomId = useSelector(roomStateSelectors.roomId);

  function sendMessageHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const sendedMessage = new SendMessageModel({
      text,
      roomId,
      userId,
    });
    socketService.emit(SocketEvent.MessageCreate, sendedMessage);
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
        className={styles.submit}
        type="submit"
      >
        Send message
      </PrimaryButton>
    </form>
  );
};

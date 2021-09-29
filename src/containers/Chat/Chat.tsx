import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { messagesSelectors, roomStateSelectors } from '@/store/selectors';
import styles from './Chat.module.scss';
import { Message } from '@/components';
import { IMessageFromBE } from '@/utils/interfaces';
import { messageActions } from '@/store/actions';
import { socketService } from '@/services';
import { useAppDispatch } from '@/store';
import { SocketEvent } from '@/utils/enums';
import { SendMessageForm } from '@/containers';
import { MessageModel } from '@/models';

export const Chat: React.FC = () => {
  const messages = useSelector(messagesSelectors.messages);
  const roomId = useSelector(roomStateSelectors.roomId);
  const dispatch = useAppDispatch();

  const subscribeMessages = useCallback((message: IMessageFromBE) => {
    const newMessage = new MessageModel(message);
    dispatch(messageActions.addMessage(newMessage));
  }, []);

  useEffect(() => {
    socketService.on(SocketEvent.MessageCreate, subscribeMessages);
    return () => {
      socketService.off(SocketEvent.MessageCreate, subscribeMessages);
    };
  }, []);

  useEffect(() => {
    dispatch(messageActions.getMessages(roomId));
  }, [roomId]);

  return (
    <section className={styles.chat}>
      <SendMessageForm />
      <div className={styles.container}>
        <h2 className={styles.header}>Chat</h2>
        {messages.map((message) => (
          <Message
            name={message.userName}
            text={message.text}
            key={message.messageId}
          />
        )) }
      </div>
    </section>
  );
};

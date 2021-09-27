import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { messagesSelectors, userSelectors } from '@/store/selectors';
import styles from './Chat.module.scss';
import { Message } from '@/components/Message';
import { IMessageFromBE } from '@/utils/interfaces';
import { messageActions } from '@/store/actions';
import { socketService } from '@/services/socketService';
import { MessageModel } from '@/models/MessageModel';
import { useAppDispatch } from '@/store';
import { SocketEvent } from '@/utils/enums';
import { SendMessageForm } from '../SendMessageForm';
import { getMessagesByRoomId } from '@/helpers';

export const Chat = (): JSX.Element => {
  const messages = useSelector(messagesSelectors.messageSelector);
  const roomId = useSelector(userSelectors.roomId);
  const dispatch = useAppDispatch();

  const subscribeMessages = useCallback((message: IMessageFromBE) => {
    const newMessage = new MessageModel(message);
    dispatch(messageActions.addMessage(newMessage));
  }, []);

  useEffect(() => {
    socketService.on(SocketEvent.MessageCreated, subscribeMessages);
    return () => {
      socketService.off(SocketEvent.MessageCreated, subscribeMessages);
    };
  }, []);

  useEffect(() => {
    dispatch<any>(getMessagesByRoomId(roomId));
  }, [roomId]);

  return (
    <section className={styles.chat}>
      <SendMessageForm />
      <div className={styles.container}>
        <h2 className={styles.header}>Chat</h2>
        {messages.map((message) => (
          <Message
            userName={message.userName}
            message={message.message}
            key={message.id}
          />
        )) }
      </div>
    </section>
  );
};

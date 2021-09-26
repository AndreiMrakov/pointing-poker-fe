import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { messageSelector, userSelectors } from '@/store/selectors';
import styles from './Chat.module.scss';
import { Message } from '@/components/Message';
import { IMessage } from '@/utils/interfaces';
import { addMessage } from '@/store/actions/messageActions';
import { socketService } from '@/services/socketService';
import { MessageModel } from '@/models/MessageModel';
import { useAppDispatch } from '@/store';
import { SocketEvent } from '@/utils/enums';
import { SendMessageForm } from '../SendMessageForm';
import { getMessagesByRoomId } from '@/helpers/getMessagesByRoomId';

export const Chat = (): JSX.Element => {
  const messages = useSelector(messageSelector);
  const room = useSelector(userSelectors.userRoom);

  const subscribeMessages = useCallback((message: IMessage) => {
    const dispatch = useAppDispatch();
    const newMessage = new MessageModel(message);
    dispatch(addMessage(newMessage));
  }, []);

  useEffect(() => {
    socketService.on(SocketEvent.MessageCreated, subscribeMessages);
    return () => {
      socketService.off(SocketEvent.MessageCreated, subscribeMessages);
    };
  }, []);

  useEffect(() => {
    getMessagesByRoomId(room);
  }, [room]);

  return (
    <section className={styles.chat}>
      <SendMessageForm />
      <div className={styles.container}>
        <h2 className={styles.header}>Chat</h2>
        {messages.map((message) => (
          message.id > 0
          && (
            <Message
              userName={message.userName}
              message={message.message}
              key={message.id}
            />
          )
        )) }
      </div>
    </section>
  );
};

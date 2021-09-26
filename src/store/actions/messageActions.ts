import { createAction } from '@reduxjs/toolkit';
import { IMessage } from '@/utils/interfaces';

export const messageActions = {
  addMessage: createAction<IMessage>('addMessage'),
  getMessages: createAction<IMessage[]>('getMessages'),
};

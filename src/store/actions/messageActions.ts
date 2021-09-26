import { createAction } from '@reduxjs/toolkit';
import { IMessage } from '@/utils/interfaces';

export const addMessage = createAction<IMessage>('addMessage');
export const getMessages = createAction<IMessage[]>('getMessages');

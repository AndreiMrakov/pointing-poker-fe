import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IMessage, IMessageFromBE } from '@/utils/interfaces';
import { httpClient } from '@/api/HttpClient';
import { MessageModel } from '@/models';

export const messageActions = {
  addMessage: createAction<IMessage>('[MESSAGES]:addMessage'),
  getMessages: createAsyncThunk('[MESSAGES]:getMessages',
    async (roomId: string, { rejectWithValue }): Promise<MessageModel[] | undefined> => {
      try {
        const messagesFromBE: IMessageFromBE[] = await httpClient.http.get(`/api/messages?roomId=${roomId}`);
        const messages = messagesFromBE.map((msg) => new MessageModel(msg));
        return messages;
      } catch (err) {
        rejectWithValue(err);
      }
    }),
};

import { createReducer } from '@reduxjs/toolkit';
import { messageActions } from '@/store/actions';
import { IMessage } from '@/utils/interfaces';

const initialState: IMessage[] = [];

export const messages = createReducer(initialState, (builder) => {
  builder
    .addCase(messageActions.addMessage, (state, action) => {
      state.push(action.payload);
    })
    .addCase(messageActions.getMessages.fulfilled, (state, action) => {
      state.push(...action.payload);
    })
    .addDefaultCase((state) => state);
});

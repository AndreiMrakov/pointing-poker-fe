import { createReducer } from '@reduxjs/toolkit';
import { messageActions, userActions } from '@/store/actions';
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
    .addCase(userActions.signOut.fulfilled, () => initialState)
    .addDefaultCase((state) => state);
});

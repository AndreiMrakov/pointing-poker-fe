import { createReducer } from '@reduxjs/toolkit';
import { messageActions } from '@/store/actions';

const initialState = [{ userName: '', message: '', id: '' }];

export const messages = createReducer(initialState, (builder) => {
  builder
    .addCase(messageActions.addMessage, (state, action) => {
      state.push(action.payload);
    })
    .addCase(messageActions.getMessages, (state, action) => {
      state.push(...action.payload);
    })
    .addDefaultCase((state) => state);
});

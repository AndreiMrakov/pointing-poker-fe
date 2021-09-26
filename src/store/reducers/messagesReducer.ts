import { createReducer } from '@reduxjs/toolkit';
import { addMessage, getMessages } from '@/store/actions/messageActions';

const initialState = [{ userName: '', message: '', id: 0 }];

export const messages = createReducer(initialState, (builder) => {
  builder
    .addCase(addMessage, (state, action) => {
      state.push(action.payload);
    })
    .addCase(getMessages, (state, action) => {
      state.push(...action.payload);
    })
    .addDefaultCase((state) => state);
});

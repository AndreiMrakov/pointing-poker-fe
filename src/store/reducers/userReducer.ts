import { createReducer } from '@reduxjs/toolkit';
import { userActions } from '@/store/actions';

const initialStateUser = {
  id: '',
  name: '',
  room: '',
};

export const user = createReducer(initialStateUser, (builder) => {
  builder
    .addCase(userActions.addUserId, (state, action) => {
      state.id = action.payload;
    })
    .addCase(userActions.addUserName, (state, action) => {
      state.name = action.payload;
    })
    .addCase(userActions.addUserRoom, (state, action) => {
      state.room = action.payload;
    })
    .addDefaultCase((state) => state);
});

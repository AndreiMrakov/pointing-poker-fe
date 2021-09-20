import { createReducer } from '@reduxjs/toolkit';
import {
  addUserId, addUserName, addUserRoom,
} from '@/store/actions/userActions';

const initialStateUser = {
  id: '',
  name: '',
  room: '',
};

export const user = createReducer(initialStateUser, (builder) => {
  builder
    .addCase(addUserId, (state, action) => {
      state.id = action.payload;
    })
    .addCase(addUserName, (state, action) => {
      state.name = action.payload;
    })
    .addCase(addUserRoom, (state, action) => {
      state.room = action.payload;
    })
    .addDefaultCase((state) => state);
});

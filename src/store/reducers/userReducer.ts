import { createReducer } from '@reduxjs/toolkit';
import { userActions } from '@/store/actions';
import { IUser } from '@/utils/interfaces';

const initialStateUser: IUser = {
  id: '',
  name: '',
  roomId: '',
  roomUserId: '',
  role: '',
  score: '',
};

export const user = createReducer(initialStateUser, (builder) => {
  builder
    .addCase(userActions.addUserId, (state, action) => {
      state.id = action.payload;
    })
    .addCase(userActions.addName, (state, action) => {
      state.name = action.payload;
    })
    .addCase(userActions.addRoomId, (state, action) => {
      state.roomId = action.payload;
    })
    .addCase(userActions.addRoomUserId, (state, action) => {
      state.roomUserId = action.payload;
    })
    .addCase(userActions.addRole, (state, action) => {
      state.role = action.payload;
    })
    .addCase(userActions.addScore, (state, action) => {
      state.score = action.payload;
    })
    .addDefaultCase((state) => state);
});

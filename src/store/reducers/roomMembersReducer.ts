import { createReducer } from '@reduxjs/toolkit';
import { IUser } from '@/utils/interfaces';
import { roomMembersActions } from '../actions';

const initialStateRoomMembers: IUser[] = [];

export const roomMembers = createReducer(initialStateRoomMembers, (builder) => {
  builder
    .addCase(roomMembersActions.addRoomMembers, (state, action) => {
      state.push(...action.payload);
    })
    .addDefaultCase((state) => state);
});

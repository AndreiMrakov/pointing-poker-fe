import { createReducer } from '@reduxjs/toolkit';
import { IUser } from '@/utils/interfaces';
import { membersActions } from '../actions';

const initialState: IUser[] = [];

export const members = createReducer(initialState, (builder) => {
  builder
    .addCase(membersActions.addRoomMembers, (state, action) => {
      state.push(...action.payload);
    })
    .addCase(membersActions.addRoomMember, (state, action) => {
      state.push(action.payload);
    })
    .addCase(membersActions.deleteRoomMember,
      (state, action) => state.filter((member) => member.userId !== action.payload))
    .addDefaultCase((state) => state);
});

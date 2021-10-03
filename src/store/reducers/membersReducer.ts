import { createReducer } from '@reduxjs/toolkit';
import { userActions, membersActions } from '@/store/actions';
import { IUser } from '@/utils/interfaces';

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
    .addCase(userActions.signOut.fulfilled, () => initialState)
    .addDefaultCase((state) => state);
});

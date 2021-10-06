import { createReducer } from '@reduxjs/toolkit';
import { userActions, membersActions, taskActions } from '@/store/actions';
import { IUser } from '@/utils/interfaces';

const initialState: IUser[] = [];

export const members = createReducer(initialState, (builder) => {
  builder
    .addCase(membersActions.getMembers.fulfilled, (state, action) => action.payload)
    .addCase(membersActions.addRoomMember, (state, action) => {
      if (!state.find((elem) => elem.userId === action.payload.userId)) {
        state.push({ ...action.payload, role: 'spectator' });
      }
    })
    .addCase(membersActions.deleteRoomMember.fulfilled,
      (state, action) => state.filter((member) => member.userId !== action.payload))
    .addCase(membersActions.updateMemberScore,
      (state, action) => state.map((member) => {
        if (member.userId === action.payload.userId) {
          return { ...member, score: action.payload.score };
        }
        return member;
      }))
    .addCase(membersActions.resetMembersScores,
      (state) => state.map((member) => ({ ...member, score: '' })))
    .addCase(taskActions.updateTaskActive.fulfilled, (state) => state.map((member) => ({ ...member, score: '' })))
    .addCase(membersActions.updateRoomAdmin, (state, action) => (state.map((member) => {
      if (member.userId === action.payload) {
        return { ...member, role: 'admin' };
      }
      return member;
    })))
    .addCase(membersActions.updateMemberRole, (state, action) => (state.map((member) => {
      if (member.userId === action.payload) {
        return { ...member, role: 'member' };
      }
      return member;
    })))
    .addCase(userActions.signOut.fulfilled, () => initialState)
    .addDefaultCase((state) => state);
});

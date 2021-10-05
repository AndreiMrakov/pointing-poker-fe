import { createReducer } from '@reduxjs/toolkit';
import { membersActions, userActions } from '@/store/actions';
import { IUser } from '@/utils/interfaces';

const initialState: IUser = {
  userId: '',
  name: '',
  role: '',
  score: '',
};

export const user = createReducer(initialState, (builder) => {
  builder
    .addCase(userActions.addUserData.fulfilled, (state, action) => ({ ...state, ...action.payload }))
    .addCase(userActions.addRole, (state, action) => {
      state.role = action.payload;
    })
    .addCase(membersActions.updateMemberScore, (state, action) => {
      if (state.userId === action.payload.userId) {
        state.score = action.payload.score;
      }
    })
    .addCase(userActions.getUserDataByLS.fulfilled, (state, action) => ({ ...action.payload }))
    .addCase(membersActions.resetMembersScores, (state, action) => ({ ...state, score: '' }))
    .addCase(userActions.signOut.fulfilled, () => initialState)
    .addDefaultCase((state) => state);
});

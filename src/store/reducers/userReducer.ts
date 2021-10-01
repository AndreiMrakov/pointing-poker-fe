import { createReducer } from '@reduxjs/toolkit';
import { userActions } from '@/store/actions';
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
    .addCase(userActions.addScore, (state, action) => {
      state.score = action.payload;
    })
    .addCase(userActions.getUserDataByLS.fulfilled, (state, action) => ({ ...action.payload }))
    .addDefaultCase((state) => state);
});

import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store';

const user = (state: RootState) => state.userReducer.user;
const settings = (state: RootState) => state.gameReducer.gameSettings;

export const userSelectors = {
  userId: createSelector(user, (state) => state.id),
  userName: createSelector(user, (state) => state.name),
  userRoom: createSelector(user, (state) => state.room),
  gameSettings: createSelector(settings, (state) => state),
};

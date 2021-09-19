import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store';

const user = (state: RootState) => state.userReducer;

export const userSelectors = {
  userId: createSelector(user, (state) => state.id),
  userName: createSelector(user, (state) => state.name),
  userRoom: createSelector(user, (state) => state.room),
};

export const gameSettings = createSelector((state: RootState) => state.gameReducer, (state) => state);

import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store';

export const userSelectors = {
  userId: createSelector((state: RootState) => state.user, (state) => state.id),
  userName: createSelector((state: RootState) => state.user, (state) => state.name),
  userRoom: createSelector((state: RootState) => state.user, (state) => state.room),
};

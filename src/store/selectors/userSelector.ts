import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store';

export const userSelectors = {
  userId: createSelector((state: RootState) => state.user, (state) => state.id),
  name: createSelector((state: RootState) => state.user, (state) => state.name),
  roomId: createSelector((state: RootState) => state.user, (state) => state.roomId),
  score: createSelector((state: RootState) => state.user, (state) => state.score),
  role: createSelector((state: RootState) => state.user, (state) => state.role),
};

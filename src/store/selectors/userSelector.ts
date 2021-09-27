import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store';

export const userSelectors = {
  userId: createSelector((state: RootState) => state.user, (state) => state.userId),
  name: createSelector((state: RootState) => state.user, (state) => state.name),
  score: createSelector((state: RootState) => state.user, (state) => state.score),
  role: createSelector((state: RootState) => state.user, (state) => state.role),
};

import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store';

const rootStateSelector = (state: RootState) => state.user;

export const userSelectors = {
  userId: createSelector(rootStateSelector, (state) => state.userId),
  name: createSelector(rootStateSelector, (state) => state.name),
  score: createSelector(rootStateSelector, (state) => state.score),
  role: createSelector((state: RootState) => state,
    (state) => state.members.find((member) => member.userId === state.user.userId)),
};

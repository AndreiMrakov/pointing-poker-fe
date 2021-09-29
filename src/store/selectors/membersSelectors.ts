import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store';

const rootStateSelector = (state: RootState) => state.members;

export const membersSelectors = {
  members: createSelector(rootStateSelector, (state) => state),
};

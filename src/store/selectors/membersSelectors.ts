import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store';

export const membersSelectors = {
  members: createSelector((state: RootState) => state.members, (state) => state),
};

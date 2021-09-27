import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store';

export const roomMembersSelector = {
  roomMembers: createSelector((state: RootState) => state.roomMembers, (state) => state),
};

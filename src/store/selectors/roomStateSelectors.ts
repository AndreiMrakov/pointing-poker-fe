import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store';

export const roomStateSelectors = {
  roomTitle: createSelector((state: RootState) => state.roomState, (state) => state.roomTitle),
  voteSystem: createSelector((state: RootState) => state.roomState, (state) => state.voteSystem),
  dealerRights: createSelector((state: RootState) => state.roomState, (state) => state.dealerRights),
  roomId: createSelector((state: RootState) => state.roomState, (state) => state.roomId),
};

import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store';

const rootStateSelector = (state: RootState) => state.roomState;

export const roomStateSelectors = {
  roomTitle: createSelector(rootStateSelector, (state) => state.roomTitle),
  voteSystem: createSelector(rootStateSelector, (state) => state.voteSystem),
  dealerRights: createSelector(rootStateSelector, (state) => state.dealerRights),
  roomId: createSelector(rootStateSelector, (state) => state.roomId),
  roomState: createSelector(rootStateSelector, (state) => state.roomState),
};

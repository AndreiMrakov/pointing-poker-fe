import { createReducer } from '@reduxjs/toolkit';
import { roomStateActions } from '@/store/actions';

const initialState = {
  roomTitle: 'TITLE',
  voteSystem: '',
  dealerRights: '',
  roomId: '',
};

export const roomState = createReducer(initialState, (builder) => {
  builder
    .addCase(roomStateActions.setRoomState, (state, action) => ({ ...action.payload }))
    .addDefaultCase((state) => state);
});

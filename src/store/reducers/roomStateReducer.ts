import { createReducer } from '@reduxjs/toolkit';
import { setRoomState } from '@/store/actions';

const initialState = {
  roomTitle: 'TITLE',
  voteSystem: '',
  dealerRights: '',
  roomId: '',
};

export const roomState = createReducer(initialState, (builder) => {
  builder
    .addCase(setRoomState, (state, action) => ({ ...action.payload }))
    .addDefaultCase((state) => state);
});

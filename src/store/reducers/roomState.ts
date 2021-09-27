import { createReducer } from '@reduxjs/toolkit';
import { addRoomState } from '@/store/actions';

const initialStateGame = {
  roomTitle: '',
  voteSystem: '',
  dealerRights: '',
  roomId: '',
};

export const roomState = createReducer(initialStateGame, (builder) => {
  builder
    .addCase(addRoomState, (state, action) => {
      state.roomTitle = action.payload.roomTitle;
      state.voteSystem = action.payload.voteSystem;
      state.dealerRights = action.payload.dealerRights;
      state.roomId = action.payload.roomId;
    })
    .addDefaultCase((state) => state);
});

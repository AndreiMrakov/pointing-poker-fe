import { createReducer } from '@reduxjs/toolkit';
import { addRoomState } from '@/store/actions';

const initialStateGame = {
  gameName: '',
  voteSystem: '',
  dealerRights: '',
  roomId: '',
};

export const roomState = createReducer(initialStateGame, (builder) => {
  builder
    .addCase(addRoomState, (state, action) => {
      state.gameName = action.payload.gameName;
      state.voteSystem = action.payload.voteSystem;
      state.dealerRights = action.payload.dealerRights;
      state.roomId = action.payload.roomId;
    })
    .addDefaultCase((state) => state);
});

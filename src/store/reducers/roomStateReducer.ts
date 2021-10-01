import { createReducer } from '@reduxjs/toolkit';
import { roomStateActions } from '@/store/actions';

const initialState = {
  roomTitle: '',
  voteSystem: '',
  dealerRights: '',
  roomId: '',
};

export const roomState = createReducer(initialState, (builder) => {
  builder
    .addCase(roomStateActions.setRoomState, (state, action) => ({ ...state, ...action.payload }))
    .addCase(roomStateActions.getRoomByUrl.fulfilled, (state, action) => {
      state.roomId = action.payload;
    })
    .addCase(roomStateActions.createRoom.fulfilled, (state, action) => ({ ...state, ...action.payload }))
    .addDefaultCase((state) => state);
});

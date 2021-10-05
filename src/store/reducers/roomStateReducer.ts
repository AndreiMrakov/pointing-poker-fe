import { createReducer } from '@reduxjs/toolkit';
import { roomStateActions, userActions } from '@/store/actions';
import { StateRoomTitle } from '@/utils/enums';

const initialState = {
  roomTitle: '',
  voteSystem: '',
  dealerRights: '',
  roomId: '',
  roomState: StateRoomTitle.reset.toString(),
};

export const roomState = createReducer(initialState, (builder) => {
  builder
    .addCase(roomStateActions.setRoomState, (state, action) => ({ ...state, ...action.payload }))
    .addCase(roomStateActions.getRoomByUrl.fulfilled, (state, action) => {
      state.roomId = action.payload;
    })
    .addCase(roomStateActions.createRoom.fulfilled, (state, action) => ({ ...state, ...action.payload }))
    .addCase(userActions.signOut.fulfilled, () => initialState)
    .addDefaultCase((state) => state);
});

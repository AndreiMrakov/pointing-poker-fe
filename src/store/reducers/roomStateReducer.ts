import { createReducer } from '@reduxjs/toolkit';
import { roomStateActions, userActions } from '@/store/actions';

const initialState = {
  roomTitle: '',
  voteSystem: '',
  dealerRights: '',
  roomId: '',
  roomState: '',
};

export const roomState = createReducer(initialState, (builder) => {
  builder
    .addCase(roomStateActions.setRoomState, (state, action) => ({ ...state, roomState: action.payload }))
    .addCase(roomStateActions.getRoomByUrl.fulfilled, (state, action) => ({
      ...state, roomTitle: action.payload.title, roomId: action.payload.id, roomState: action.payload.state,
    }))
    .addCase(roomStateActions.createRoom.fulfilled, (state, action) => ({ ...state, ...action.payload }))
    .addCase(userActions.signOut.fulfilled, () => initialState)
    .addDefaultCase((state) => state);
});

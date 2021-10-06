import { createReducer } from '@reduxjs/toolkit';
import { roomStateActions, taskActions, userActions } from '@/store/actions';
import { StateRoomTitle } from '@/utils/enums';

const initialState = {
  roomTitle: '',
  voteSystem: '',
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
    .addCase(taskActions.updateTaskActive.fulfilled, (state) => ({ ...state, roomState: StateRoomTitle.reset }))
    .addCase(userActions.signOut.fulfilled, () => initialState)
    .addDefaultCase((state) => state);
});

import { createAction } from '@reduxjs/toolkit';

interface IRoomState {
  roomTitle: string;
  voteSystem: string;
  dealerRights: string;
}

export const roomStateActions = {
  setRoomState: createAction<IRoomState>('[ROOM_STATE]:setRoomState'),
  setRoomId: createAction<string>('[ROOM_STATE]:setRoomId'),
};

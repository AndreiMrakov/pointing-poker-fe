import { createAction } from '@reduxjs/toolkit';

interface IRoomState {
  roomTitle: string;
  voteSystem: string;
  dealerRights: string;
  roomId: string;
}

export const addRoomState = createAction<IRoomState>('addGameSettings');

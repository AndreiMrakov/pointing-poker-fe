import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { http } from '@/api/HttpClient';
import { IRoomState } from '@/utils/interfaces';
import history from '@/utils/history';

interface IRoomSettings {
  roomTitle: string;
  voteSystem?: string;
  dealerRights?: string
}

export const roomStateActions = {
  setRoomState: createAction<IRoomState>('[ROOM_STATE]:setRoomState'),
  getRoomByUrl: createAsyncThunk('[ROOM_STATE]:getRoomByUrl', async (roomIdByUrl: string, { rejectWithValue }) => {
    try {
      // const roomId: string = await http.get(`/api/room/${roomIdByUrl}`);
      const roomId = '11';
      if (!roomId) {
        return rejectWithValue('Error witn room');
      }
      return roomId;
    } catch (err) {
      return rejectWithValue(err);
    }
  }),
  createRoom: createAsyncThunk('[ROOM_STATE]:createRoom',
    async (roomSettings: IRoomSettings, { rejectWithValue }) => {
      try {
        // const state: IRoomState = await http.post('/api/room', roomSettings);
        history.push('games/11');
        // return state;
        return { ...roomSettings, roomId: '11' };
      } catch (err) {
        return rejectWithValue(err);
      }
    }),
};

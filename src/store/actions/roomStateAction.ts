import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IRoomState } from '@/utils/interfaces';
import { history } from '@/utils/history';
import { delay, getRoomIdByUrl } from '@/helpers';
import { navMap } from '@/utils/NavMap';

interface IRoomSettings {
  roomTitle: string;
  voteSystem?: string;
  dealerRights?: string
}

export const roomStateActions = {
  setRoomState: createAction<IRoomState>('[ROOM_STATE]:setRoomState'),
  getRoomByUrl: createAsyncThunk('[ROOM_STATE]:getRoomByUrl',
    async (_: void, { rejectWithValue }) => {
      try {
        // const idFromUrl = getRoomIdByUrl();
        const roomId: string = await delay('11');
        if (!roomId) {
          history.push(navMap.newGame());
          return rejectWithValue('Error witn room');
        }
        return roomId;
      } catch (err) {
        history.push(navMap.newGame());
        return rejectWithValue(err);
      }
    }),
  createRoom: createAsyncThunk('[ROOM_STATE]:createRoom',
    async (roomSettings: IRoomSettings, { rejectWithValue }) => {
      try {
        // const state: IRoomState = await http.post('/api/room', roomSettings);
        const state: IRoomState = await delay({ ...roomSettings, roomId: '11' });
        history.push(navMap.room(state.roomId));
        return state;
      } catch (err) {
        return rejectWithValue(err);
      }
    }),
};

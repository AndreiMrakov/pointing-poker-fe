import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { http } from '@/api/HttpClient';
import { IRoomState, IRoomFromBE } from '@/utils/interfaces';
import { history } from '@/utils/history';
import { getRoomIdByUrl } from '@/helpers';
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
        const idFromUrl = getRoomIdByUrl();
        const roomState: IRoomFromBE = await http.get(`/api/rooms/${idFromUrl}`);
        if (!roomState) {
          throw new Error('Error witn room');
        }
        return roomState.id;
      } catch (err) {
        history.push(navMap.newGame());
        return rejectWithValue(err);
      }
    }),
  createRoom: createAsyncThunk('[ROOM_STATE]:createRoom',
    async (roomSettings: IRoomSettings, { rejectWithValue }) => {
      try {
        const state: IRoomFromBE = await http.post('/api/rooms/',
          {
            title: roomSettings.roomTitle,
          });
        history.push(navMap.game(state.id));
        return state;
      } catch (err) {
        return rejectWithValue(err);
      }
    }),
};

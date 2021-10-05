import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { http } from '@/api/HttpClient';
import { IRoomState, IRoomFromBE } from '@/utils/interfaces';
import { history } from '@/utils/history';
import { getRoomIdByUrl } from '@/helpers';
import { navMap } from '@/utils/NavMap';
import { RoomStateModel } from '@/models';

interface IRoomSettings {
  roomTitle: string;
  voteSystem?: string;
  dealerRights?: string;
  roomState?: string
}

export const roomStateActions = {
  setRoomState: createAction<IRoomState['roomState']>('[ROOM_STATE]:setRoomState'),
  getRoomByUrl: createAsyncThunk('[ROOM_STATE]:getRoomByUrl',
    async (_: void, { rejectWithValue }) => {
      try {
        const idFromUrl = getRoomIdByUrl();
        const roomStateFromBE: IRoomFromBE = await http.get(`/api/rooms/${idFromUrl}`);
        if (!roomStateFromBE) {
          throw new Error('Error witn room');
        }
        return roomStateFromBE.id;
      } catch (err) {
        history.push(navMap.newGame());
        return rejectWithValue(err);
      }
    }),
  createRoom: createAsyncThunk('[ROOM_STATE]:createRoom',
    async (roomSettings: IRoomSettings, { rejectWithValue }) => {
      try {
        const stateFromBE: IRoomFromBE = await http.post('/api/rooms/',
          {
            title: roomSettings.roomTitle,
          });
        history.push(navMap.game(stateFromBE.id));
        const state = new RoomStateModel(stateFromBE);
        return state;
      } catch (err) {
        return rejectWithValue(err);
      }
    }),
};

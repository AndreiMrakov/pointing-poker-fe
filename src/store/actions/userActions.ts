import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { userSelectors, roomStateSelectors } from '@/store/selectors';
import { RootState } from '@/store';
import { IUser, IUserFromBE } from '@/utils/interfaces';
import { http } from '@/api/HttpClient';
import { UserModel } from '@/models';
import { history } from '@/utils/history';
import { navMap } from '@/utils/NavMap';
import { socketService } from '@/services';
import { SocketEvent } from '@/utils/enums';
import { getRoomIdByUrl } from '@/helpers';

interface IUserJoin {
  name: string;
  link?: string
}

export const userActions = {
  signOut: createAsyncThunk('[USER]:signOut',
    async (_:void, { rejectWithValue, getState }) => {
      try {
        const roomId = roomStateSelectors.roomId(getState() as RootState);
        const userId = userSelectors.userId(getState() as RootState);
        localStorage.removeItem('userId');
        history.push(navMap.home());
        socketService.emit(SocketEvent.RoomLeave, { roomId, userId });
      } catch (err) {
        rejectWithValue(err);
      }
    }),
  addUserData: createAsyncThunk('[USER]:addUserData',
    async (joinUser: IUserJoin, { rejectWithValue }) => {
      try {
        const userFromBE: IUserFromBE = await http.post('/api/users',
          {
            name: joinUser.name,
          });
        const user = new UserModel(userFromBE);
        localStorage.setItem('userId', user.userId);
        if (joinUser.link) {
          history.push(navMap.game(getRoomIdByUrl(joinUser.link)));
        } else {
          history.push(navMap.newGame());
        }
        return user;
      } catch (err) {
        return rejectWithValue(err);
      }
    }),
  getUserDataByLS: createAsyncThunk('[USER]:getUserDataByLS',
    async (_:void, { rejectWithValue }) => {
      try {
        const id = localStorage.getItem('userId');
        if (!id) {
          throw new Error('There is nothing UserId in localStorage');
        }
        const data: IUserFromBE = await http.get(`/api/users/${id}`);
        const user = new UserModel(data);
        return user;
      } catch (err) {
        history.push(navMap.error());
        return rejectWithValue(err);
      }
    }),
};

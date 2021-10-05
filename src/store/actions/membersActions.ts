import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IUser, IUserFromBE } from '@/utils/interfaces';
import { http } from '@/api/HttpClient';
import { roomStateSelectors } from '../selectors';
import { UserModel } from '@/models';

export const membersActions = {
  getMembers: createAsyncThunk('[MEMBERS]:addRoomMembers',
    async (_:void, { rejectWithValue, getState }) => {
      try {
        const roomId = roomStateSelectors.roomId(getState() as RootState);
        const usersFromBE: IUserFromBE[] = await http.get(`/api/users?roomId=${roomId}`);
        if (!usersFromBE) {
          throw new Error('Error with room members');
        }
        const users:IUser[] = usersFromBE.map((usr) => new UserModel(usr));
        return users;
      } catch (err) {
        return rejectWithValue(err);
      }
    }),
  addRoomMember: createAction<IUser>('[MEMBERS]:addRoomMember'),
  deleteRoomMember: createAction<IUser['userId']>('[MEMBERS]:deleteRoomMember'),
};

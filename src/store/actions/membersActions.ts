import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { userSelectors, roomStateSelectors } from '@/store/selectors';
import { RootState } from '../store';
import { IUser, IUserFromBE, IUserScore } from '@/utils/interfaces';
import { http } from '@/api/HttpClient';

import { UserModel } from '@/models';
import { history } from '@/utils/history';
import { navMap } from '@/utils/NavMap';

export const membersActions = {
  getMembers: createAsyncThunk('[MEMBERS]:addRoomMembers',
    async (_:void, { rejectWithValue, getState }) => {
      try {
        const roomId = roomStateSelectors.roomId(getState() as RootState);
        const currentUser = userSelectors.user(getState() as RootState);
        const usersFromBE: IUserFromBE[] = await http.get(`/api/users?roomId=${roomId}`);
        if (!usersFromBE) {
          throw new Error('Error with room members');
        }
        const users:IUser[] = usersFromBE.map((usr) => new UserModel(usr));
        const isUserSended = users.find((user) => user.userId === currentUser.userId);
        if (!isUserSended) {
          users.push(currentUser);
        }
        return users;
      } catch (err) {
        return rejectWithValue(err);
      }
    }),
  updateMemberScore: createAction<IUserScore>('[MEMBERS]:updateMemberScore'),
  addRoomMember: createAction<IUser>('[MEMBERS]:addRoomMember'),
  updateRoomAdmin: createAction<IUser['userId']>('[MEMBERS]:updateRoomAdmin'),
  updateMemberRole: createAction<IUser['userId']>('[MEMBERS]:updateMemberRole'),
  resetMembersScores: createAction('[MEMBERS]:resetMembersScores'),
  deleteRoomMember: createAsyncThunk('[MEMBERS]:deleteRoomMember',
    async (id:IUser['userId'], { getState }) => {
      const userId = userSelectors.userId(getState() as RootState);
      if (userId === id) {
        history.push(navMap.newGame());
      }
      return id;
    }),
};

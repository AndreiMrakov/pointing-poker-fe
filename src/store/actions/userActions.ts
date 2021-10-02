import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IUserFromBE } from '@/utils/interfaces';
import { http } from '@/api/HttpClient';
import { UserModel } from '@/models';
import { history } from '@/utils/history';

export const userActions = {
  addRole: createAction<string>('[USER]:addRole'),
  addScore: createAction<string>('[USER]:addScore'),
  addUserData: createAsyncThunk('[USER]:addUserData',
    async (name: string, { rejectWithValue }) => {
      try {
        const userFromBE: IUserFromBE = await http.post('/api/users',
          {
            name,
          });
        const user = new UserModel(userFromBE);
        localStorage.setItem('userId', user.userId);
        history.push('/newGame');
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
          history.push('/404');
          return rejectWithValue('There is nothing UserId in localStorage');
        }
        const data: IUserFromBE = await http.get(`/api/users/${id}`);
        const user = new UserModel(data);
        return user;
      } catch (err) {
        history.push('/404');
        return rejectWithValue(err);
      }
    }),
};

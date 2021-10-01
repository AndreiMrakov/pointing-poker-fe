import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IUserFromBE } from '@/utils/interfaces';
import { http } from '@/api/HttpClient';
import { UserModel } from '@/models';

export const userActions = {
  addRole: createAction<string>('[USER]:addRole'),
  addScore: createAction<string>('[USER]:addScore'),
  addUserData: createAsyncThunk('[USER]:addUserData', async (name: string, { rejectWithValue }) => {
    try {
      const userFromBE: IUserFromBE = await http.post('/api/users',
        {
          name,
        });
      const user = new UserModel(userFromBE);
      return user;
    } catch (err) {
      return rejectWithValue(err);
    }
  }),
  getUserDataByLS: createAsyncThunk('[USER]:getUserDataByLS', async (id: string | null, { rejectWithValue }) => {
    try {
      if (!id) {
        return rejectWithValue('There is nothing UserId in localStorage');
      }
      const data: IUserFromBE = await http.get(`/api/users/${id}`);
      const user = new UserModel(data);
      return user;
    } catch (err) {
      return rejectWithValue(err);
    }
  }),
};

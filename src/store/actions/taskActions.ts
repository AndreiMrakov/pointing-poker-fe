import { createAsyncThunk } from '@reduxjs/toolkit';
import { httpClient } from '@/api/HttpClient';
import { ITask } from '@/utils/interfaces';

export const taskActions = {
  getTasks: createAsyncThunk('[TASKS]:getTasks',
    async (roomId: string, { rejectWithValue }) => {
      try {
        const tasks: ITask[] = await httpClient.http.get(`/api/task?roomId=${roomId}`);
        return tasks;
      } catch (err) {
        return rejectWithValue(err);
      }
    }),
};

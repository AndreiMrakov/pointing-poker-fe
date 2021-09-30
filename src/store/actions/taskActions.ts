import { createAsyncThunk } from '@reduxjs/toolkit';
import { httpClient } from '@/api/HttpClient';
import { ITaskFromBE } from '@/utils/interfaces';
import { TaskModel } from '@/models';

export const taskActions = {
  getTasks: createAsyncThunk('[TASKS]:getTasks',
    async (roomId: string, { rejectWithValue }) => {
      try {
        const tasksFromBE: ITaskFromBE[] = await httpClient.http.get(`/api/task?roomId=${roomId}`);
        const tasks = tasksFromBE.map((task) => new TaskModel(task));
        return tasks;
      } catch (err) {
        return rejectWithValue(err);
      }
    }),
};

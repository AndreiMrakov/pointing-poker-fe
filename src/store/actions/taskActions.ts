import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { httpClient } from '@/api/HttpClient';
import { ITask, ITaskFromBE } from '@/utils/interfaces';
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
  addTask: createAction<ITask>('[TASKS]:addTask'),
  updateTaskScore: createAction<ITask>('[TASKS]:updateTaskScore'),
  updateTaskActive: createAction<ITask>('[TASKS]:updateTaskActive'),
};

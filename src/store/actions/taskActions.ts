import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { httpClient } from '@/api/HttpClient';
import { ITask, ITaskFromBE } from '@/utils/interfaces';
import { TaskModel } from '@/models';
import { roomStateSelectors } from '../selectors';
import { RootState } from '..';

export const taskActions = {
  getTasks: createAsyncThunk('[TASKS]:getTasks',
    async (_, { rejectWithValue, getState }) => {
      try {
        const roomId = roomStateSelectors.roomId(getState() as RootState);
        const tasksFromBE: ITaskFromBE[] = await httpClient.http.get(`/api/task?roomId=${roomId}`);
        const tasks = tasksFromBE.map((task) => new TaskModel(task));
        return tasks;
      } catch (err) {
        return rejectWithValue(err);
      }
    }),
  addTask: createAction<ITask>('[TASKS]:addTask'),
  signOut: createAction('[TASKS]:signOut'),
  deleteTask: createAction<ITask['id']>('[TASKS]:deleteTask'),
  updateTaskScore: createAction<ITask>('[TASKS]:updateTaskScore'),
  updateTaskActive: createAction<ITask['id']>('[TASKS]:updateTaskActive'),
};

import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { tasksSelectors, roomStateSelectors } from '@/store/selectors';
import { httpClient } from '@/api/HttpClient';
import { ITask, ITaskFromBE } from '@/utils/interfaces';
import { TaskModel } from '@/models';

import { RootState } from '..';
import { socketService } from '@/services';
import { SocketEvent } from '@/utils/enums';

export const taskActions = {
  getTasks: createAsyncThunk('[TASKS]:getTasks',
    async (_, { rejectWithValue, getState }) => {
      try {
        const roomId = roomStateSelectors.roomId(getState() as RootState);
        const tasksFromBE: ITaskFromBE[] = await httpClient.http.get(`/api/tasks?roomId=${roomId}`);
        const tasks = tasksFromBE
          .map((task) => new TaskModel(task))
          .sort((taskOne, taskTwo) => taskOne.id - taskTwo.id);
        return tasks;
      } catch (err) {
        return rejectWithValue(err);
      }
    }),
  addTask: createAction<ITask>('[TASKS]:addTask'),
  deleteTask: createAction<ITask['id']>('[TASKS]:deleteTask'),
  updateTaskScore: createAction<ITask>('[TASKS]:updateTaskScore'),
  updateActiveTaskScore: createAction<ITask['score']>('[TASKS]:updateActiveTaskScore'),
  updateTaskActive: createAsyncThunk('[TASKS]:updateTaskActive',
    async (id: ITask['id'], { getState }) => {
      const activeTask = tasksSelectors.activeTask(getState() as RootState);
      socketService.emit(SocketEvent.RoomFinish, { id: activeTask?.id });
      return id;
    }),
};

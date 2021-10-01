import { createReducer } from '@reduxjs/toolkit';
import { ITask } from '@/utils/interfaces';
import { taskActions } from '../actions/taskActions';

const initialStateTasks: ITask[] = [];

export const tasks = createReducer(initialStateTasks, (builder) => {
  builder
    .addCase(taskActions.getTasks.fulfilled, (state, action) => {
      state.push(...action.payload);
    })
    .addCase(taskActions.addTask, (state, action) => {
      state.push(action.payload);
    })
    .addDefaultCase((state) => state);
});

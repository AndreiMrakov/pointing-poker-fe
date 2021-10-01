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
    .addCase(taskActions.deleteTask, (state, action) => {
      state.filter((task) => task.id !== action.payload.id);
    })
    .addCase(taskActions.updateTaskScore, (state, action) => {
      state.forEach((task) => {
        if (task.id === action.payload.id) {
          task.score = action.payload.score;
        }
      });
    })
    .addCase(taskActions.updateTaskActive, (state, action) => {
      state.forEach((task) => {
        if (task.id === action.payload.id) {
          task.isActive = action.payload.isActive;
        }
      });
    })
    .addDefaultCase((state) => state);
});

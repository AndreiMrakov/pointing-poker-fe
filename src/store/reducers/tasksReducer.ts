import { createReducer } from '@reduxjs/toolkit';
import { userActions } from '@/store/actions';
import { ITask } from '@/utils/interfaces';
import { taskActions } from '../actions/taskActions';

const initialState: ITask[] = [];

export const tasks = createReducer(initialState, (builder) => {
  builder
    .addCase(taskActions.getTasks.fulfilled, (state, action) => {
      state.push(...action.payload);
    })
    .addCase(taskActions.addTask, (state, action) => {
      state.push(action.payload);
    })
    .addCase(taskActions.deleteTask, (state, action) => state.filter((task) => task.id !== action.payload))
    .addCase(taskActions.updateTaskScore, (state, action) => state.map((task) => {
      if (task.id === action.payload.id) {
        return { ...task, score: action.payload.score };
      }
      return task;
    }))
    .addCase(taskActions.updateActiveTaskScore, (state, action) => state.map((task) => {
      if (task.isActive) {
        return { ...task, score: action.payload };
      }
      return task;
    }))
    .addCase(taskActions.updateTaskActive, (state, action) => state.map((task) => {
      if (task.id === action.payload) {
        return { ...task, isActive: true };
      }
      return { ...task, isActive: false };
    }))
    .addCase(userActions.signOut.fulfilled, () => initialState)
    .addDefaultCase((state) => state);
});

import { createReducer } from '@reduxjs/toolkit';
import { userActions } from '@/store/actions';
import { ITask } from '@/utils/interfaces';
import { taskActions } from '../actions/taskActions';

const initialState: ITask[] = [
  {
    id: 1,
    title: 'title',
    score: '20',
    isActive: true,
  },
  {
    id: 2,
    title: 'title2',
    score: '0',
    isActive: false,
  },
];

export const tasks = createReducer(initialState, (builder) => {
  builder
    .addCase(taskActions.getTasks.fulfilled, (state, action) => {
      state.push(...action.payload);
    })
    .addCase(taskActions.addTask, (state, action) => {
      state.push(action.payload);
    })
    .addCase(taskActions.deleteTask, (state, action) => {
      state.filter((task) => task.id !== action.payload);
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
        if (task.id === action.payload) {
          task.isActive = true;
        } else {
          task.isActive = false;
        }
      });
    })
    .addCase(userActions.signOut.fulfilled, () => initialState)
    .addDefaultCase((state) => state);
});

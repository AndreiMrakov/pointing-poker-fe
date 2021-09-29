import { createReducer } from '@reduxjs/toolkit';

const initialStateTasks = {
  id: 0,
  title: '',
  score: 0,
  isActive: false,
};

export const tasks = createReducer(initialStateTasks, (builder) => {
  builder
    .addDefaultCase((state) => state);
});

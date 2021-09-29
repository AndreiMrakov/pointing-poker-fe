import { createReducer } from '@reduxjs/toolkit';

const initialStateTasks = {};

export const tasks = createReducer(initialStateTasks, (builder) => {
  builder
    .addDefaultCase((state) => state);
});

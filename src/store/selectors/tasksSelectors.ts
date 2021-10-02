import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store';

export const tasksSelectors = {
  tasks: createSelector((state: RootState) => state.tasks, (tasks) => tasks),
};

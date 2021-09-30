import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store';

export const messagesSelectors = {
  tasks: createSelector((state: RootState) => state.tasks, (tasks) => tasks),
};

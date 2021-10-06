import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store';

const rootStateSelector = (state: RootState) => state.tasks;

export const tasksSelectors = {
  tasks: createSelector(rootStateSelector, (tasks) => tasks),
  activeTask: createSelector(rootStateSelector, (tasks) => tasks.find((elem) => elem.isActive === true)),
};

import { createAction } from '@reduxjs/toolkit';

export const userActions = {
  addUserId: createAction<string>('addUserId'),
  addName: createAction<string>('addName'),
  addRole: createAction<string>('addRole'),
  addScore: createAction<string>('addScore'),
};

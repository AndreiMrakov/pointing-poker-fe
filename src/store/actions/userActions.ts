import { createAction } from '@reduxjs/toolkit';

export const userActions = {
  addUserId: createAction<string>('addUserId'),
  addUserName: createAction<string>('addUserName'),
  addUserRoom: createAction<string>('addUserRoom'),
};

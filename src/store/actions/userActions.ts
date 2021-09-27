import { createAction } from '@reduxjs/toolkit';

export const userActions = {
  addUserId: createAction<string>('addUserId'),
  addName: createAction<string>('addName'),
  addRoomId: createAction<string>('addRoom'),
  addRoomUserId: createAction<string>('addRoomUserId'),
  addRole: createAction<string>('addRole'),
  addScore: createAction<string>('addScore'),
};

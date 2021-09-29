import { createAction } from '@reduxjs/toolkit';
import { IUser } from '@/utils/interfaces';

export const userActions = {
  addUserData: createAction<IUser>('[USER]:addUserData'),
  addUserName: createAction<string>('[USER]:addUserName'),
  addRole: createAction<string>('[USER]:addRole'),
  addScore: createAction<string>('[USER]:addScore'),
};

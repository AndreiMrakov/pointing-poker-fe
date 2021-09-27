import { createAction } from '@reduxjs/toolkit';
import { IUser } from '@/utils/interfaces';

export const roomMembersActions = {
  addRoomMembers: createAction<IUser[]>('addRoomMembers'),
};

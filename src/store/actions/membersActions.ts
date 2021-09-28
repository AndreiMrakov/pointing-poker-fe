import { createAction } from '@reduxjs/toolkit';
import { IUser } from '@/utils/interfaces';

export const membersActions = {
  addRoomMembers: createAction<IUser[]>('[MEMBERS]:addRoomMembers'),
  addRoomMember: createAction<IUser>('[MEMBERS]:addRoomMember'),
  deleteRoomMember: createAction<IUser['userId']>('[MEMBERS]:deleteRoomMember'),
};

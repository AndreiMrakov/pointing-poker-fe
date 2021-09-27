import { createAction } from '@reduxjs/toolkit';
import { IRoomMember } from '@/utils/interfaces';

export const roomMembersActions = {
  addRoomMembers: createAction<IRoomMember[]>('addRoomMembers'),
};

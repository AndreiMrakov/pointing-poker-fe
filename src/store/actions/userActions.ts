import { createAction } from '@reduxjs/toolkit';

interface IAddGameSettings {
  gameName: string;
  voteSystem: string | undefined;
  dealerRights: string | undefined;
}

export const addUserId = createAction<string>('addUserId');
export const addUserName = createAction<string>('addUserName');
export const addUserRoom = createAction<string>('addUserRoom');
export const addGameSettings = createAction<IAddGameSettings>('addGameSettings');

import { createAction } from '@reduxjs/toolkit';

interface IAddGameSettings {
  gameName: string;
  voteSystem: string;
  dealerRights: string;
}

export const addGameSettings = createAction<IAddGameSettings>('addGameSettings');

import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store';

export const gameSettingsSelector = createSelector((state: RootState) => state.gameSettings, (state) => state);

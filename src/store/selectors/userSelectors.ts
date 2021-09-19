import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const user = (state: RootState) => state.userReducer.user;
const settings = (state: RootState) => state.userReducer.gameSettings;

export const userId = createSelector(user, (state) => state.id);
export const userName = createSelector(user, (state) => state.name);
export const userRoom = createSelector(user, (state) => state.room);
export const gameSettings = createSelector(settings, (state) => state);

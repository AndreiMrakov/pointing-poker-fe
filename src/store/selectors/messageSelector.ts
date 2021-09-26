import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store';

export const messageSelector = createSelector((state: RootState) => state.messages, (messages) => messages);

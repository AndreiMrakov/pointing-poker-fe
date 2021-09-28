import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store';

export const messagesSelectors = {
  messages: createSelector((state: RootState) => state.messages, (messages) => messages),
};

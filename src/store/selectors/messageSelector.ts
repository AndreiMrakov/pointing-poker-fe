import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store';

export const messagesSelectors = {
  messageSelector: createSelector((state: RootState) => state.messages, (messages) => messages),
};

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import {
  messages, user, gameSettings, roomMembers,
} from './reducers';
import { getEnvValue } from '@/helpers/getEnvValue';

export const store = configureStore({
  reducer: {
    user, gameSettings, messages, roomMembers,
  },
  middleware: getDefaultMiddleware({
    immutableCheck: true,
    serializableCheck: false,
    thunk: true,
  }),
  devTools: getEnvValue('NODE_ENV') !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = (): ReturnType<typeof useDispatch> => useDispatch<AppDispatch>();

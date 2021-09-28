import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import {
  messages, user, roomState, members,
} from './reducers';
import { getEnvValue } from '@/helpers/getEnvValue';

export const store = configureStore({
  reducer: {
    user, roomState, messages, members,
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

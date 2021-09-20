import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { getEnvValue } from '@/helpers/getEnvValue';
import { user } from '@/store/reducers/userReducer';
import { gameSettings } from './reducers/gameSettingsReducer';

export const store = configureStore({
  reducer: { user, gameSettings },
  middleware: getDefaultMiddleware({
    immutableCheck: true,
    serializableCheck: false,
    thunk: true,
  }),
  devTools: getEnvValue('NODE_ENV') !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

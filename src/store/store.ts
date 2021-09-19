import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { getEnvValue } from '@/helpers/getEnvValue';
import { userReducer, gameReducer } from '@/store/reducers/userReducer';

export const store = configureStore({
  reducer: { userReducer, gameReducer },
  middleware: getDefaultMiddleware({
    immutableCheck: true,
    serializableCheck: false,
    thunk: true,
  }),
  devTools: getEnvValue('NODE_ENV') !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

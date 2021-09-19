import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { getEnvValue } from '@/helpers/getEnvValue';
import { userReducer } from './reducers/userReducer';

export const store = configureStore({
  reducer: { userReducer },
  middleware: getDefaultMiddleware({
    immutableCheck: true,
    serializableCheck: false,
    thunk: true,
  }),
  devTools: getEnvValue() !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

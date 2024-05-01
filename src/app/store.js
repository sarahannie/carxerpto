import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slice/authSlice';
import { authApi } from './api/authApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authSlice
  }
});

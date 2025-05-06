import { configureStore } from '@reduxjs/toolkit';
import { youtubeReducer, youtubeSlice } from './youtubeSlice.ts';

export const store = configureStore({
  reducer: {
    [youtubeSlice.name]: youtubeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

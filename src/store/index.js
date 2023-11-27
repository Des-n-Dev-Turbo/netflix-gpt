import { configureStore } from '@reduxjs/toolkit';

import moviesSliceReducer from './moviesSlice';
import userSliceReducer from './userSlice';
import gptSliceReducer from './gptSlice';

const appStore = configureStore({
  reducer: {
    user: userSliceReducer,
    movies: moviesSliceReducer,
    gpt: gptSliceReducer,
  },
  devTools: import.meta.env.DEV,
});

export default appStore;

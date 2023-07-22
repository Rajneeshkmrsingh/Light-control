import { configureStore } from '@reduxjs/toolkit';
import lightReducer from './slice';

const store = configureStore({
  reducer: {
    lights: lightReducer,
  },
});

export default store;

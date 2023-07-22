import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bedroom: {
    light1: false,
    light2: false,
  },
  kitchen: {
    light1: false,
    light2: false,
  },
};

const lightSlice = createSlice({
  name: 'lights',
  initialState,
  reducers: {
    turnOnLight: (state, action) => {
      const { room, light } = action.payload;
      state[room][light] = true;
    },
    turnOffLight: (state, action) => {
      const { room, light } = action.payload;
      state[room][light] = false;
    },
    initializeState: (state, action) => {
      return action.payload;
    },
  },
});

export const { turnOnLight, turnOffLight, initializeState } = lightSlice.actions;

export default lightSlice.reducer;

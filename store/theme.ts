import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from './';
import type { PayloadAction } from '@reduxjs/toolkit';

import themes from 'theme';

interface States {
  selectedTheme: keyof typeof themes;
}

const initialState: States = {
  selectedTheme: 'main',
};

export const themeSlice = createSlice({
  name: 'counter',

  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<keyof typeof themes>) => {
      state.selectedTheme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.selectedTheme;

export default themeSlice.reducer;

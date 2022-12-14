import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from './';
import type { ThemeKeys } from 'types';

interface States {
  selectedTheme: ThemeKeys;
}

const initialState: States = {
  selectedTheme: 'main',
};

export const themeSlice = createSlice({
  name: 'theme',

  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeKeys>) => {
      state.selectedTheme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.selectedTheme;

export default themeSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '.';

import { LocalesType } from 'types';

interface States {
  current: LocalesType;
}

const initialState: States = {
  current: 'en',
};

export const localeSlice = createSlice({
  name: 'locale',

  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<LocalesType>) => {
      state.current = action.payload;
    },
  },
});

export const { setLocale } = localeSlice.actions;

export const selectLocale = (state: RootState) => state.locale.current;

export default localeSlice.reducer;

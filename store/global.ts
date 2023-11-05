import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setCookie } from 'cookies-next';

interface States {
  isSidebarOpen: boolean;
}

const initialState: States = {
  isSidebarOpen: true,
};

export const globalSlice = createSlice({
  name: 'global',

  initialState,
  reducers: {
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;

      setCookie('sidebarOpen', `${action.payload}`);
    },
  },
});

export const { setSidebarOpen } = globalSlice.actions;

export default globalSlice.reducer;

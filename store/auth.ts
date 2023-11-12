import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User, UserSession } from 'types/User';

interface States {
  user: User | null;
  session: UserSession['session'] | null;
}

const initialState: States = {
  user: null,
  session: null,
};

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserSession>) => {
      state.session = action.payload.session;
      state.user = action.payload.user;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';

import globalReducer from './global';
import localeReducer from './locale';
import themeReducer from './theme';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    locale: localeReducer,
    global: globalReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

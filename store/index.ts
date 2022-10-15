import { configureStore } from '@reduxjs/toolkit';

import localeReducer from './locale';
import themeReducer from './theme';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    locale: localeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

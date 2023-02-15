import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import api from 'client/api';

import globalReducer from './global';
import localeReducer from './locale';
import themeReducer from './theme';
import workspacesReducer from './workspaces';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    locale: localeReducer,
    global: globalReducer,
    workspaces: workspacesReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

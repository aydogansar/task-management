import { StateFromReducersMapObject, configureStore, PreloadedState } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { setupListeners } from '@reduxjs/toolkit/query';

import api from 'services/api';

import authReducer from './auth';
import globalReducer from './global';

const reducer = {
  global: globalReducer,
  auth: authReducer,
  [api.reducerPath]: api.reducer,
};

export type Reducer = StateFromReducersMapObject<typeof reducer>;

export type InitialStoreState = Partial<PreloadedState<Reducer>>;

type TReduxStore = ToolkitStore<PreloadedState<Reducer>>;

let ReduxStore: TReduxStore;

export const makeStore = (preloadedState?: InitialStoreState): TReduxStore => {
  if (ReduxStore) {
    return ReduxStore;
  }

  const store = configureStore({
    reducer: reducer,
    preloadedState,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
  });

  setupListeners(store.dispatch);

  ReduxStore = store;
  return store;
};

export type AppStore = ReturnType<typeof makeStore>;

export type AppDispatch = AppStore['dispatch'];

export type RootState = ReturnType<AppStore['getState']>;

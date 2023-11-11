'use client';

import { ReactNode } from 'react';

import { setupListeners } from '@reduxjs/toolkit/query';
import { Provider } from 'react-redux';

import { InitialStoreState, makeStore } from 'store';

interface Props {
  children: ReactNode;
  initialStates?: InitialStoreState;
}

function ReduxProvider({ children, initialStates }: Props) {
  const store = makeStore(initialStates);

  setupListeners(store.dispatch);

  return <Provider store={store}>{children}</Provider>;
}
export default ReduxProvider;

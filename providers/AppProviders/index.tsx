import { ReactNode } from 'react';

import AuthProvider from 'providers/AuthProvider';

import ReduxProvider from '../ReduxProvider';

import getInitialData from './getInitialData';

interface Props {
  children: ReactNode;
}

async function AppProviders({ children }: Props) {
  const initialStates = await getInitialData();

  return (
    <ReduxProvider initialStates={initialStates}>
      <AuthProvider user={initialStates?.auth?.user}>{children}</AuthProvider>
    </ReduxProvider>
  );
}
export default AppProviders;

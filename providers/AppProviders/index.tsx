import { ReactNode } from 'react';

import ReduxProvider from '../ReduxProvider';

import getInitialData from './getInitialData';

interface Props {
  children: ReactNode;
}

async function AppProviders({ children }: Props) {
  const initialStates = await getInitialData();

  return <ReduxProvider initialStates={initialStates}>{children}</ReduxProvider>;
}
export default AppProviders;

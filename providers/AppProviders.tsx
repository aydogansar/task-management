import { ReactNode } from 'react';

import ReduxProvider from './ReduxProvider';

interface Props {
  children: ReactNode;
}

function AppProviders({ children }: Props) {
  return <ReduxProvider>{children}</ReduxProvider>;
}
export default AppProviders;

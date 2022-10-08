import { ReactNode } from 'react';

import ReduxProvider from './ReduxProvider';
import ThemeProvider from './ThemeProvider';

interface Props {
  children: ReactNode;
}

function AppProviders({ children }: Props) {
  return (
    <ReduxProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ReduxProvider>
  );
}

export default AppProviders;

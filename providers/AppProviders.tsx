import { ReactNode } from 'react';

import IntlProvider from './IntlProvider';
import ReduxProvider from './ReduxProvider';
import ThemeProvider from './ThemeProvider';

interface Props {
  children: ReactNode;
}

function AppProviders({ children }: Props) {
  return (
    <ReduxProvider>
      <IntlProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </IntlProvider>
    </ReduxProvider>
  );
}

export default AppProviders;

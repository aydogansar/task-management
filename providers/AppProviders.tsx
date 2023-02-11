import { ReactNode } from 'react';

import DndProvider from './DndProvider';
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
        <ThemeProvider>
          <DndProvider>{children}</DndProvider>
        </ThemeProvider>
      </IntlProvider>
    </ReduxProvider>
  );
}

export default AppProviders;

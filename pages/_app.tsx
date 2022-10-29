import type { AppProps } from 'next/app';

import { AppLayout } from 'layouts';
import { AppProviders } from 'providers';
import { Page } from 'types';

import '../styles/globals.css';

interface CustomAppProps extends AppProps {
  Component: Page;
}

function MyApp({ Component, pageProps }: CustomAppProps) {
  const pageConfigs = Component.configs || {};

  return (
    <AppProviders>
      <AppLayout {...pageConfigs}>
        <Component {...pageProps} />
      </AppLayout>
    </AppProviders>
  );
}

export default MyApp;

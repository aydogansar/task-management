import { NextRequest } from 'next/server';

import createMiddleware from 'next-intl/middleware';

import { DEFAULT_LOCALE, locales } from 'languages';
import { pathnames } from 'navigation';

export const intlMiddleware = (request: NextRequest) => {
  const handleIntlRouting = createMiddleware({
    locales,
    defaultLocale: DEFAULT_LOCALE,
    pathnames,
  });

  return handleIntlRouting(request);
};

import { NextResponse, type NextRequest } from 'next/server';

import createMiddleware from 'next-intl/middleware';

import { DEFAULT_LOCALE, locales } from 'languages';
import { pathnames } from 'navigation';

export async function middleware(request: NextRequest) {
  const handleIntlRouting = createMiddleware({
    locales,
    defaultLocale: DEFAULT_LOCALE,
    pathnames,
  });

  const response = handleIntlRouting(request);

  return response;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};

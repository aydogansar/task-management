import { NextResponse, type NextRequest } from 'next/server';

import { createServerClient, type CookieOptions } from '@supabase/ssr';
import createMiddleware from 'next-intl/middleware';

import { DEFAULT_LOCALE, locales } from 'languages';
import { pathnames } from 'navigation';

export async function middleware(request: NextRequest) {
  const handleIntlRouting = createMiddleware({
    locales,
    defaultLocale: DEFAULT_LOCALE,
    pathnames,
  });

  let response = handleIntlRouting(request);

  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      get(name: string) {
        return request.cookies.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        request.cookies.set({
          name,
          value,
          ...options,
        });
        response = NextResponse.next({
          request: {
            headers: request.headers,
          },
        });
        response.cookies.set({
          name,
          value,
          ...options,
        });
      },
      remove(name: string, options: CookieOptions) {
        request.cookies.set({
          name,
          value: '',
          ...options,
        });
        response = NextResponse.next({
          request: {
            headers: request.headers,
          },
        });
        response.cookies.set({
          name,
          value: '',
          ...options,
        });
      },
    },
  });

  await supabase.auth.getSession();

  return response;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};

import { NextRequest, NextResponse } from 'next/server';

import { createServerClient, CookieOptions } from '@supabase/ssr';

import { ACCESS_TOKEN_KEY } from 'constant';

export const authMiddleware = async (request: NextRequest, response: NextResponse) => {
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

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session?.user) {
    response.cookies.set(ACCESS_TOKEN_KEY, session?.access_token);
  }

  return response;
};

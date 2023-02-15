// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { PublicPaths } from 'constant';

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

export function middleware(request: NextRequest) {
  const hasToken = request.cookies.get('session_token')?.valueOf();

  const isPublicPath = PublicPaths.some(item => request.nextUrl.pathname.startsWith(item));

  if (!hasToken && !isPublicPath) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  if (hasToken && isPublicPath) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  const response = NextResponse.next();

  return response;
}

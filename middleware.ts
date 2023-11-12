import { NextRequest } from 'next/server';

import { authMiddleware } from 'middlewares/authMiddleware';
import { intlMiddleware } from 'middlewares/intlMiddleware';

export async function middleware(request: NextRequest) {
  const response = await authMiddleware(request, intlMiddleware(request));

  return response;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};

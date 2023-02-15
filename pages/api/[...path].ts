import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler(req: NextRequest) {
  const session = req.cookies.get('session_token')?.valueOf();

  const path = req.nextUrl.pathname.replace(/^\/api/, '');

  return fetch(`${process.env.BASE_URL}${path}`, {
    method: req.method,
    headers: {
      ...req?.headers,
      session,
    },
    ...(req?.body && { body: req.body }),
    redirect: 'manual',
  });
}

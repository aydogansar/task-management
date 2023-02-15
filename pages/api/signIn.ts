// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next';

import altogic from 'altogic.config';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = JSON.parse(req.body);

  const { user, session, errors } = await altogic.auth.signInWithEmail(email, password);

  if (errors) {
    res.status(errors.status).json({ errors });
  } else if (session) {
    altogic.auth.setSessionCookie(session.token, req, res);
    altogic.auth.setSession(session);

    res.status(200).json({ user, session });
  }
}

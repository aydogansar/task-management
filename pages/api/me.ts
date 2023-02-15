import type { NextApiRequest, NextApiResponse } from 'next';

import altogic from 'altogic.config';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user, errors } = await altogic.auth.getUserFromDBbyCookie(req, res);

  if (user) {
    return res.status(200).json({ user });
  }

  return res.status(errors?.status || 403).json({ errors });
}

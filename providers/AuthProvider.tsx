'use client';

import { ReactNode } from 'react';

import { useSelector } from 'hooks';
import { usePathname, redirect } from 'navigation';

interface Props {
  children: ReactNode;
}

/**
 * All routes are private by default
 * except included here
 */

const publicPaths = ['/auth'];

/**
 * If has user info this pages should redirect to home
 */
const anonimPaths = ['/auth'];

function AuthProvider({ children }: Props) {
  const user = useSelector(state => state.auth.user);

  const pathname = usePathname();
  const isPublicPage = publicPaths.includes(pathname);

  if (!user && !isPublicPage) {
    return redirect('/auth');
  }

  if (user && anonimPaths.includes(pathname)) {
    return redirect('/');
  }

  return children;
}
export default AuthProvider;

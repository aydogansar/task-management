'use client';

import { ReactNode } from 'react';

import { redirect } from 'next/navigation';

import { usePathname } from 'navigation';
import { User } from 'types/User';

interface Props {
  children: ReactNode;
  user?: User;
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

function AuthProvider({ children, user }: Props) {
  const pathname = usePathname();

  const isPublicPage = publicPaths.includes(pathname);
  const isAnonimPage = anonimPaths.includes(pathname);

  if (!user && !isPublicPage) {
    redirect('/auth');
  }

  if (user && isAnonimPage) {
    redirect('/');
  }

  return children;
}
export default AuthProvider;

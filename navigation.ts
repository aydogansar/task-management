import { createLocalizedPathnamesNavigation, Pathnames } from 'next-intl/navigation';

import { locales } from 'languages';

export const pathnames = {
  '/': '/',
  '/auth': {
    tr: '/giris',
    en: '/auth',
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } = createLocalizedPathnamesNavigation({ locales, pathnames });

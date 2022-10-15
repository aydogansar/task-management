import '@testing-library/jest-dom';

import { LocalesType } from 'types';

import messages from './index';

const defaultLocale = 'en';

const defaultMessages = messages[defaultLocale];

describe('Messages', () => {
  it('should have same keys in all languages', () => {
    const locales = Object.keys(messages) as LocalesType[];

    locales.forEach(locale => {
      if (defaultLocale === locale) {
        return;
      }

      const currentMessages = messages[locale];

      expect(Object.keys(currentMessages).sort()).toEqual(Object.keys(defaultMessages).sort());
    });
  });
});

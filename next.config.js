/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.ts'
);

const nextConfig = withNextIntl({
  compiler: {
    reactRemoveProperties: process.env.NODE_ENV === 'production' ? { properties: ['data-cy'] } : false,
  },
});

module.exports = nextConfig;

import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#4169E1',
        secondary: '#FFD369',
        primaryDark: '#272829',
        secondaryDark: '#393E46',
        neutral: '#EEEEEE',
        danger: '#ff0505',
        success: '#22bb33',
        warning: '#f0ad4e',
        info: '#5bc0de',
      },
      keyframes: {
        inputBorderAnimation: {
          '0%': { left: 'calc(50% - 1rem)', width: '1rem' },
          '50%': { left: '0', width: '100%' },
        },
      },
      animation: {
        inputBorderAnimation: 'inputBorderAnimation 1s',
        inputBorderAnimationInfinite: 'inputBorderAnimation 1s infinite',
      },
    },
  },
  plugins: [],
};
export default config;

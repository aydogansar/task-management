import { DefaultTheme } from 'styled-components';

import colors from './colors';
import shadows from './shadows';
import utils from './utils';

const mainTheme: DefaultTheme = {
  colors: {
    ...colors,
    primary: colors.royalBlue,
    secondary: colors.beeYellow,
    bgColor: colors.dark,
    textColor: colors.darkGray,
    hoverColor: colors.white,
  },
  shadows,
  utils,
};

const lightTheme: DefaultTheme = {
  ...mainTheme,
  colors: {
    ...mainTheme.colors,
  },
};

const themes = {
  main: mainTheme,
  light: lightTheme,
};

export default themes;

export { default as GlobalStyle } from './globalStyle';

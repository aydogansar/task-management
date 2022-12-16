import 'styled-components';

import { Colors } from './colors';
import { Shadows } from './shadows';
import { Utils } from './utils';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      bgColor: string;
      textColor: string;
      hoverColor: string;
    } & Colors;
    shadows: Shadows;
    utils: Utils;
  }
}

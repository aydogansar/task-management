import 'styled-components';

import { Colors } from './colors';
import { Utils } from './utils';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      bgColor: string;
      textColor: string;
    } & Colors;
    utils: Utils;
  }
}

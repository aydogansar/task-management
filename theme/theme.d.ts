import 'styled-components';

import { Colors } from './colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      bgColor: string;
      textColor: string;
    } & Colors;
  }
}

import { ReactNode } from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { useSelector } from 'hooks';
import themes, { GlobalStyle } from 'theme';

interface Props {
  children: ReactNode;
}

function ThemeProvider({ children }: Props) {
  const selectedTheme = useSelector(state => state.theme.selectedTheme);

  const theme = themes[selectedTheme];

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
}

export default ThemeProvider;

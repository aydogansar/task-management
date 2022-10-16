import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.bgColor};
    color:${({ theme }) => theme.colors.textColor};
  }
`;

export default GlobalStyle;

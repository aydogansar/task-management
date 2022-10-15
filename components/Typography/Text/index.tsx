import { ReactNode } from 'react';

import styled from 'styled-components';

import { ThemeColorsType } from 'types';

export interface Props {
  children: ReactNode;
  size?: number;
  color?: ThemeColorsType;
  block?: boolean;
  as?: 'p';
}

type StyledComponentProps = Pick<Props, 'size' | 'color'>;

function Text({ children, size = 1, block, as, ...props }: Props) {
  const componentTag = block ? 'div' : 'span';

  return (
    <StyledText
      size={size}
      {...props}
      as={as || componentTag}
    >
      {children}
    </StyledText>
  );
}

export default Text;

const StyledText = styled.span<StyledComponentProps>`
  font-size: ${({ size }) => size}rem;
  color: ${({ theme, color }) => color && theme.colors[color]};
`;

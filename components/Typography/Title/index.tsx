import styled from 'styled-components';

import { Props as TextProps } from '../Text';

interface Props extends Omit<TextProps, 'as' | 'block'> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

type StyledComponentProps = Pick<Props, 'size' | 'color'>;

function Title({ children, level, ...props }: Props) {
  return (
    <StyledTitle
      {...props}
      as={level && `h${level}`}
    >
      {children}
    </StyledTitle>
  );
}

export default Title;

const StyledTitle = styled.div<StyledComponentProps>`
  font-size: ${({ size }) => size && `${size}rem`};
  color: ${({ theme, color }) => color && theme.colors[color]};
`;

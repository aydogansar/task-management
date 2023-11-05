import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

type ComponentTagElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';

function Title({ children, level, ...props }: Props) {
  const ComponentTag = (level ? `h${level}` : 'div') as ComponentTagElement;

  return (
    <ComponentTag
      data-cy="title"
      {...props}
    >
      {children}
    </ComponentTag>
  );
}

export default Title;

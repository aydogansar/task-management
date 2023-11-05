import { ReactNode } from 'react';

export interface Props {
  children: ReactNode;
  size?: number;
  block?: boolean;
  as?: 'p';
  className?: string;
}

function Text({ children, block, as, ...props }: Props) {
  const ComponentTag = as || (block ? 'div' : 'span');

  return (
    <ComponentTag
      data-cy="text"
      {...props}
    >
      {children}
    </ComponentTag>
  );
}

export default Text;

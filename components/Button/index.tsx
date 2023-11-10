import { ButtonHTMLAttributes, ReactNode } from 'react';

import styles, { ButtonVariants } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: ButtonVariants;
}

function Button({ children }: Props) {
  return <button className={styles({ variant: 'secondary' })}>{children}</button>;
}
export default Button;

import { ButtonHTMLAttributes, ReactNode } from 'react';

import styles, { ButtonVariants } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariants['variant'];
}

function Button({ children, variant }: Props) {
  return <button className={styles({ variant })}>{children}</button>;
}
export default Button;

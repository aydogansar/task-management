import { InputHTMLAttributes } from 'react';

import { ErrorMessage, FormRegister } from 'types/Form';

import styles from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  error?: ErrorMessage;
  register?: FormRegister;
}

function Input({ type = 'text', name, label, register, error, placeholder, ...props }: Props) {
  const { wrapper, labelStyles, input } = styles({ error: !!error });

  return (
    <div
      data-cy="input"
      className={wrapper()}
    >
      <input
        type={type}
        className={input()}
        placeholder={placeholder || ' '}
        autoComplete="off"
        {...props}
        id={name}
        {...(register && { ...register(name) })}
      />
      {label && (
        <label
          className={labelStyles()}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      {/* {error && <span>{error.toString()}</span>} */}
    </div>
  );
}
export default Input;

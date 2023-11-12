'use client';

import { useTranslations } from 'next-intl';

import { Button, Input } from 'components';

import styles from './styles';
import useAuthForm from './useAuthForm';

function AuthForm() {
  const { handleSubmit, register, formElements, type, setType, isLoading } = useAuthForm();

  const { wrapper, form, tabsWrapper, tab } = styles();

  const t = useTranslations('AuthPage');

  return (
    <div className={wrapper({ loading: isLoading })}>
      <ul className={tabsWrapper()}>
        <li className="w-full">
          <button
            role="checkbox"
            className={tab({ active: type === 'signIn', first: true })}
            onClick={() => setType('signIn')}
            aria-checked={type === 'signIn'}
          >
            {t('signInLabel')}
          </button>
        </li>
        <li className="w-full">
          <button
            role="checkbox"
            className={tab({ active: type === 'signUp', last: true })}
            onClick={() => setType('signUp')}
            aria-checked={type === 'signUp'}
          >
            {t('signUpLabel')}
          </button>
        </li>
      </ul>

      <h1 className="mb-11 text-secondary">{t(type === 'signIn' ? 'signInTitle' : 'signUpTitle')}</h1>

      <form
        className={form()}
        onSubmit={handleSubmit}
        method="post"
      >
        {formElements.map(element => (
          <Input
            key={element.name}
            register={register}
            {...element}
          />
        ))}
        <Button>{t(type === 'signIn' ? 'signInLabel' : 'signUpLabel')}</Button>
      </form>
    </div>
  );
}
export default AuthForm;

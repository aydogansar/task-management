'use client';

import { ReactNode, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { setCookie } from 'cookies-next';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { BiSolidUser } from 'react-icons/bi';
import { MdOutlinePassword } from 'react-icons/md';
import * as yup from 'yup';

import { useValidations } from 'components/Form';
import { ACCESS_TOKEN_KEY } from 'constant';
import { useRouter } from 'navigation';
import { useSignInMutation, useSignUpMutation } from 'services';

const EMAIL = 'email';
const PASSWORD = 'password';

const LabelWrapper = ({ children }: { children: ReactNode }) => <div className="flex items-center gap-2">{children}</div>;

type AuthType = 'signIn' | 'signUp';

function useAuthForm() {
  const [type, setType] = useState<AuthType>('signIn');

  const t = useTranslations('AuthPage');

  const { requiredMessage, emailMessage } = useValidations();

  const schema = yup.object({
    [EMAIL]: yup
      .string()
      .email(emailMessage())
      .required(requiredMessage(t('email'))),
    [PASSWORD]: yup.string().required(requiredMessage(t('password'))),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<yup.InferType<typeof schema>>({ resolver: yupResolver(schema) });

  const formElements = [
    {
      name: EMAIL,
      label: (
        <LabelWrapper>
          <BiSolidUser />
          {t('email')}
        </LabelWrapper>
      ),
      error: errors[EMAIL]?.message,
      placeholder: t('placeholderEmail'),
    },
    {
      name: PASSWORD,
      type: 'password',
      label: (
        <LabelWrapper>
          <MdOutlinePassword />
          {t('password')}
        </LabelWrapper>
      ),

      error: errors[PASSWORD]?.message,
    },
  ];

  const [signIn, { isLoading: isLoadingSignIn }] = useSignInMutation();

  const [signup, { isLoading: isLoadingSignUp }] = useSignUpMutation();

  const isLoading = isLoadingSignIn || isLoadingSignUp;

  const { refresh } = useRouter();

  const onSubmit = async ({ email, password }: yup.InferType<typeof schema>) => {
    try {
      if (type === 'signIn') {
        const {
          data: { session },
        } = await signIn({ email, password }).unwrap();

        setCookie(ACCESS_TOKEN_KEY, session?.access_token, { path: '/' });
      }

      if (type === 'signUp') {
        await signup({ email, password });
      }

      refresh();
    } catch (err) {
      console.log(err);
    }
  };

  return {
    handleSubmit: handleSubmit(onSubmit),
    register,
    formElements,
    type,
    setType,
    isLoading,
  };
}

export default useAuthForm;

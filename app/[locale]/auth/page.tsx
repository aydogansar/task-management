import pick from 'lodash/pick';
import { NextIntlClientProvider, useLocale, useMessages } from 'next-intl';

import AuthForm from './AuthForm';

export default function Home() {
  const locale = useLocale();

  const messages = useMessages();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <NextIntlClientProvider
        locale={locale}
        messages={pick(messages, ['AuthPage', 'Validations'])}
      >
        <AuthForm />
      </NextIntlClientProvider>
    </main>
  );
}

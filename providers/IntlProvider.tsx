import { ReactNode } from 'react';

import { IntlProvider as ReactIntlProvider } from 'react-intl';

import { useSelector } from 'hooks';
import messages from 'languages';

interface Props {
  children: ReactNode;
}

function IntlProvider({ children }: Props) {
  const { current } = useSelector(state => state.locale);

  const currentMessages = messages[current];

  return (
    <ReactIntlProvider
      messages={currentMessages}
      locale={current}
      defaultLocale="en"
    >
      {children}
    </ReactIntlProvider>
  );
}
export default IntlProvider;

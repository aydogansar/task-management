import messages from './index';

export interface Messages {
  hi: string;
}

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: keyof Messages;
    }
  }
  namespace FormatjsIntl {
    interface IntlConfig {
      locale: keyof typeof messages;
    }
  }
}

import messages from './index';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: keyof typeof messages.en;
    }
  }
  namespace FormatjsIntl {
    interface IntlConfig {
      locale: keyof typeof messages;
    }
  }
}

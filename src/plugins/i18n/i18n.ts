import { createI18n } from "petite-vue-i18n";
import messages from "./locales/messages.ts";

import {
  registerMessageResolver, // register the message resolver API
  resolveValue, // message resolver of vue-i18n which is used by default
  registerLocaleFallbacker, // register the locale fallbacker API
  fallbackWithLocaleChain, // locale fallbacker of vue-i18n which is used by default
} from "@intlify/core-base";

// register message resolver of vue-i18n
registerMessageResolver(resolveValue);

// register locale fallbacker of vue-i18n
registerLocaleFallbacker(fallbackWithLocaleChain);

const i18n = createI18n({
  locale: "en",
  messages,
});

export default i18n;

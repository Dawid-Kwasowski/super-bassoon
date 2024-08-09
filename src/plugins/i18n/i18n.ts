import { createI18n } from "petite-vue-i18n";
import messages from "./locales/messages.ts";
const i18n = createI18n({
  locale: "en",
  messages,
});

export default i18n;

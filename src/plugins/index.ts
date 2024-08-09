import { App } from "vue";
import router from "../route";
import pinia from "../stores";
import i18n from "./i18n/i18n.ts";
export function registerPlugins(app: App): void {
  app.use(router).use(pinia).use(i18n);
}

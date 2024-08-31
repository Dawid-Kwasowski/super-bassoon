import { App } from "vue";
import pinia from "../stores";
import i18n from "./i18n/i18n.ts";
import router from "../router";

export function registerPlugins(app: App): void {
  app.use(pinia).use(router).use(i18n);
}

import { createRouter, createWebHistory } from "vue-router";
// import { process } from "@tauri-apps/api";
import AuthView from "../views/AuthView.vue";

const routes = [{ path: "/", component: AuthView, name: "auth" }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

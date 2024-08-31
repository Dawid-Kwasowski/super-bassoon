import { createRouter, createWebHashHistory } from "vue-router";
import SettingsView from "../views/Settings/SettingsView.vue";
import MainView from "../views/MainView/MainView.vue";
import ProfilesView from "../views/Settings/views/ProfilesView/ProfilesView.vue";
import GeneralView from "../views/Settings/views/GeneralView/GeneralView.vue";

const routes = [
  {
    path: "",
    name: "Home",
    component: MainView,
  },
  {
    path: "/settings",
    name: "Settings",
    component: SettingsView,
    children: [
      {
        name: "General",
        path: "general",
        component: GeneralView,
      },
      {
        name: "Profiles",
        path: "profiles",
        component: ProfilesView,
      },
    ],
  },
  // other routes...
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "bg-primary",
  routes,
});

export default router;

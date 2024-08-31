<script setup lang="ts">
import CNavigation from "./components/CNavigation/CNavigation.vue";
import { INavigationItem } from "./components/CNavigation/ICNavigation.ts";

const menuItems: INavigationItem[] = [
  { to: "/settings/general", label: "General", icon: "settings" },
  { to: "/settings/profiles", label: "Profiles", icon: "person" },
];
</script>

<template>
  <div class="p-2 select-none">
    <div class="m-2">
      <c-navigation :items="menuItems" />
    </div>
    <router-view />
  </div>
</template>

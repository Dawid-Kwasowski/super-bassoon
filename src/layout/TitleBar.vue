<script setup lang="ts">
import { appWindow } from "@tauri-apps/api/window";

const buttons = [
  {
    name: "exit",
    action: async () => await appWindow.close(),
    color: { "bg-red-500 hover:bg-red-600": true },
  },
  {
    name: "minimize",
    action: async () => await appWindow.minimize(),
    color: { "bg-yellow-500 hover:bg-yellow-600": true },
  },
  {
    name: "maximize",
    action: async () => await appWindow.maximize(),
    color: { "bg-green-500 hover:bg-green-600": true },
  },
];
</script>

<template>
  <div
    data-tauri-drag-region
    class="h-[30px] w-full bg-black rounded-2xl fixed flex top-0 left-0 right-0 items-center select-none px-2"
  >
    <div
      v-for="(item, index) in buttons"
      :key="index"
      :class="item.color"
      @click="item.action"
      class="w-[14px] h-[14px] rounded-full mx-1"
    ></div>
  </div>
</template>

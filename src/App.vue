<script setup lang="ts">
import TitleBar from "./layout/TitleBar.vue";
</script>

<template>
  <div class="bg-black rounded-xl py-9 h-full overflow-hidden">
    <title-bar />
    <router-view />
  </div>
</template>

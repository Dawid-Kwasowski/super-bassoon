<script setup lang="ts">
import ICNavigation from "./ICNavigation.ts";
import CIcon from "@/components/CIcon/CIcon.vue";

const { items } = defineProps<ICNavigation>();
</script>

<template>
  <div class="w-screen justify-center flex">
    <div v-for="{ to, label, icon } in items">
      <router-link
        exact
        :to
        class="flex flex-col justify-center items-center text-white mx-2 rounded-xl min-w-[100px] max-w-[150px] p-2 cursor-pointer"
      >
        <c-icon :name="icon" />
        <span>{{ label }}</span>
      </router-link>
    </div>
  </div>
</template>

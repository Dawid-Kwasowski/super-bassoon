<script setup lang="ts">
import ICList from "./model/ICList.ts";

const { items } = defineProps<ICList>();
</script>

<template>
  <div class="text-white">
    <ul>
      <li
        class="cursor-pointer bg-red-500 w-full px-2 py-1 rounded-lg my-1"
        v-for="{ name } in items"
      >
        <span>{{ name }}</span>
      </li>
    </ul>
  </div>
</template>

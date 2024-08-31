<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const props = defineProps<{ name: string }>();

const icon = defineAsyncComponent(
  async (): Promise<any> => await import(`@/assets/icons/${props.name}.svg`),
);
</script>

<template>
  <component :is="icon" />
</template>

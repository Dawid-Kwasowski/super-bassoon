<script setup lang="ts">
import ICInput from "./model/ICInput.ts";

const { type, label } = withDefaults(defineProps<ICInput>(), {
  type: "text",
});
</script>

<template>
  <div>
    <label :for="label" class="flex">
      <span class="mx-2">{{ label }}</span>
      <input
        class="text-black rounded-lg h-[30px] w-full px-2"
        :name="label"
        :id="label"
        :type
      />
    </label>
  </div>
</template>

<style scoped></style>

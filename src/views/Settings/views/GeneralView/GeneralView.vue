<script setup lang="ts">
import CIcon from "@/components/CIcon/CIcon.vue";
import { useI18n } from "petite-vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div class="flex justify-center h-[400px] items-center text-white">
    <div class="flex flex-col items-center">
      <c-icon class="w-[100px]" name="work_in_progress" />
      {{ t("views.settings.t") }}
    </div>
  </div>
</template>

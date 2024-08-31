<script setup lang="ts">
import { useI18n } from "petite-vue-i18n";
const { t } = useI18n();
import CInput from "@/components/CInput/CInput.vue";
import { useProfilesStore } from "@/stores/profiles/profiles.ts";
import CList from "@/components/CList/CList.vue";

const store = useProfilesStore();
</script>

<template>
  <!--  Profiles Container-->
  <div class="h-[400px] flex p-2">
    <!--    Profiles List-->
    <div
      class="border-2 border-white h-full basis-1/3 rounded-xl mx-1 text-white p-2"
    >
      <div>
        <h5 class="font-medium">{{ t("views.profiles.sideBar.t") }}</h5>
        <div class="p-2">
          <c-list :active="0" :items="store.profiles"></c-list>
        </div>
      </div>
    </div>
    <!--    Profiles Management-->
    <div
      class="border-2 border-white h-full basis-full rounded-xl mx-1 p-2 text-white"
    >
      <div>
        <h5 class="font-medium">{{ t("views.profiles.general.t") }}</h5>
        <div class="p-2">
          <form>
            <c-input label="Name" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

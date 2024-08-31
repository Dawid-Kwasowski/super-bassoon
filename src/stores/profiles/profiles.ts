import { defineStore } from "pinia";

export const useProfilesStore = defineStore("profiles", {
  state: () => ({
    selectedProfileId: "flying-fox",
    profiles: [
      {
        id: "flying-fox",
        name: "Default",
        text: {
          cursor: "underline",
          blink: true,
        },
        colors: {
          foreground: "#fff",
          background: "#1d1e27",
        },
      },
      {
        id: "wolf-spider",
        name: "Test",
        text: {
          cursor: "block",
          blink: false,
        },
        colors: {
          foreground: "#000",
          background: "#fff",
        },
      },
    ],
  }),
  actions: {
    switchProfile(id: string) {
      this.selectedProfileId = id;
    },
  },
  getters: {
    getSelectedProfile(state) {
      return state.profiles.find(({ id }) => id === this.selectedProfileId);
    },
  },
});

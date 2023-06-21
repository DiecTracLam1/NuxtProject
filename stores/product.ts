// Pinia Store
import { defineStore } from "pinia";

export const useUserStore = defineStore("User", {
  state: () => {
    return {
      data: {},
      loading: false,
      error: "",
    };
  },
  getters: {
  },
  actions: {
    
  },
});

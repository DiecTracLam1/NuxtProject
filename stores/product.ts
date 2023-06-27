// Pinia Store
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => {
    return {
      data: {},
    };
  },
  getters: {},
  actions: {
    async fetch(_offset: number, _limit: number) {
      console.log("das");
      const { data: product } = await useFetch(
        `/api/product?_offset=${_offset}&_limit=${_limit}`
      );
      this.data = product.value.data;
    },
  },
});

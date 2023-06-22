export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      getProducts: async (productLogCount: number, _offset: any) =>
        await $fetch("/api/product", {
          params: { _limit: productLogCount, _offset: _offset.value },
        }),
    },
  };
});

import { useProductStore } from "~/stores/product";
export default defineNuxtPlugin(async (nuxtApp) => {
  const product = useProductStore();
  console.log("server")
  return {
    provide: {
      productPluxgin: async (_offset: number, _limit: number) =>
        await product.fetch(_offset, _limit),
    },
  };
});

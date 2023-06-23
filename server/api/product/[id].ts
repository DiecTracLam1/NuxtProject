import { getDetailProduct } from "../../db/product";

export default defineEventHandler(async (event) => {
  const id:string | undefined = event.context.params?.id;
  const product = await getDetailProduct(id || "");
  return { data: product };
});

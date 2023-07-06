import { getBrandIdByProuductId, getRelatedProduct } from "../../../db/product";

export default defineEventHandler(async (event) => {
  const id: string | undefined = event.context.params?.id;
  const { brandId } = await getBrandIdByProuductId(id || "");

  const product = await getRelatedProduct(id || "", brandId);
  return { data: product };
});

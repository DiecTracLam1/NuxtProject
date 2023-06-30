import { getProducts } from "../../db/product";
import { productTransformer } from "../../transfomers/product";
export default defineEventHandler(async (event) => {
  const { _offset = 0, _limit = 3, brand, category: type } = getQuery(event);

  const { total, products } = await getProducts({
    skip: Number(_offset),
    take: Number(_limit),
  },{brand});
  return { data: productTransformer({ products, _offset, _limit, total }) };
});

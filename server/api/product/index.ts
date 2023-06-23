import { getProducts } from "../../db/product";
import { productTransformer } from "../../transfomers/product";
export default defineEventHandler(async (event) => {
  const { _offset = 0, _limit = 9 } = getQuery(event);
  // console.log(params)
  const { total, products } = await getProducts({
    skip: Number(_offset),
    take: Number(_limit),
  });
  return { data: productTransformer({ products, _offset, _limit, total }) };
});

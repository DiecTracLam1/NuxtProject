import { getProducts } from "../../db/product";
import { productTransformer } from "../../transfomers/product";
export default defineEventHandler(async (event) => {
  const {
    _offset = 0,
    _limit = 3,
    brand,
    category: type,
    _sort = "asc",
    minPrice = 0,
    maxPrice = 1000,
    search = ''
  } = getQuery(event);

  const { total, products } = await getProducts(
    {
      skip: Number(_offset),
      take: Number(_limit),
    },
    { brand, _sort, type, minPrice, maxPrice , search }
  );
  return {
    data: productTransformer({
      products,
      _offset,
      _limit,
      total: total._count,
    }),
  };
});

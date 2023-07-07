import { getProducts } from "../../db/product";
import { productTransformer } from "../../transfomers/product";
export default defineEventHandler(async (event) => {
  const {
    _offset = 0,
    _limit = 12,
    brand,
    color,
    category: type,
    _sort = "asc",
    price = "",
    search = "",
    size,
  } = getQuery(event);

  const convertPrice = function () {
    if (!price) return [0, 1000];
    const priceList = (price as string).split("-");
    return priceList;
  };

  const [minPrice, maxPrice] = convertPrice();

  const { total, products } = await getProducts(
    {
      skip: Number(_offset),
      take: Number(_limit),
      include : {
        stock:true
      }
    },
    { brand, _sort, type, minPrice, maxPrice, search, size , color}
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

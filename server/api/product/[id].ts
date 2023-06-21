import { getDetailProduct } from "../../db/product";

export default defineEventHandler(async (event) => {
  const product = await getDetailProduct("6492c171572f2f9af05603d6");
  return { data: product };
});

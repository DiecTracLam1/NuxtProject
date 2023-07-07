import { getDetailProduct } from "../../db/product";

export default defineEventHandler(async (event) => {
  const id: string | undefined = event.context.params?.id;
  const product = await getDetailProduct(
    {
      include: {
        stock: true,
      },
    },
    id || ""
  );
  return { data: product };
});

import { createOrder } from "../../db/order";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { product , userId, totalPrice } = body;

  const order = await createOrder(product , userId, totalPrice);
  return { data: order };
});

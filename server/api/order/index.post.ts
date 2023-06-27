import { createOrder } from "../../db/order";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { product, user, totalPrice } = body;
  console.log(typeof user);

  // const order = await createOrder(product, user, totalPrice);
  // return { data: order };
});

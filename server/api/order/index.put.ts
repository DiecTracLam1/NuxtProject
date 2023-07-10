import { updateOrder } from "../../db/order";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { orderId  , status , message} = body;

  const order = await updateOrder(orderId, status , message);
  return { data: order };
});

import { updateOrder } from "../../db/order";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { orderId, status } = body;

  await updateOrder(orderId, status);
  return {
    data: {
      messsage: "success",
      status : 200
    },
  };
});

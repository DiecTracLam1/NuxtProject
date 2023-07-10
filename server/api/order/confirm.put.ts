import { updateOrder } from "../../db/order";
import { updateStock } from "../../db/stock";
import { sendError } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  let error = false;
  let status = "3";
  let message = "";
  const { orderId, product } = body;

  const availableStock = async () => {
    for (const productItem of product) {
      const { count } = await updateStock(productItem);
      if (count === 0) {
        error = true;
        status = "5";
        message = "Not enough stock for this order";
      }
    }
  };
  await availableStock();
  await updateOrder(orderId, status, message);
  if (error) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Not enough stock for this order",
      })
    );
  }
  return {
    data: {
      messsage: "success",
      status: 200,
    },
  };
});

import { getOrderById, updateOrder } from "../../db/order";
import { getDetailProduct } from "../../db/product";
import { updateStock } from "../../db/stock";
import { sendError } from "h3";
import { Order } from "../../types/order.types";

export default defineEventHandler(async (event: any) => {
  const orderId = event.context.params.id;
  let error = false;
  let status = "3";
  let message = "";

  const order: Order = await getOrderById(orderId);
  
  const availableStock = async () => {
    let i = 0;
    for (const productId of order?.productId) {
      const { count } = await updateStock(productId, order?.quantities[i]);
      if (count === 0) {
        error = true;
        status = "5";
        message = "Not enough stock for this order";
      }
      i++;
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

import { getOrderById, updateOrder } from "../../db/order";
import { getProductById } from "../../db/product";
import { updateStock } from "../../db/stock";
import { sendError } from "h3";
import { Order } from "../../types/order.types";
import { Product } from "../../types/product.types";

export default defineEventHandler(async (event: any) => {
  const orderId = event.context.params.id;
  let error = false;
  let status = "3";
  let message = "";

  const order: Order = await getOrderById(orderId);
  for (const [index, productId] of order?.productId.entries()) {
    const product:Product = await getProductById(productId);
    if (product.stock[0].quantity < order.quantities[index]) {
      error = true;
      status = "5";
      message = "Not enough stock for this order";
      break;
    }
  }

  if (error) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Not enough stock for this order",
      })
    );
  }

  for (const [i, productId] of order?.productId.entries()) {
    await updateStock(productId, order?.quantities[i]);
  }

  await updateOrder(orderId, status, message);

  return {
    data: {
      messsage: "success",
      status: 200,
    },
  };
});

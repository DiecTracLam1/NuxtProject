import { getOrderById, updateOrder } from "../../db/order";
import { getProuductsByProductIds } from "../../db/product";
import { updateStock } from "../../db/stock";
import { sendError } from "h3";
import { Order } from "../../types/order.types";
import product from "../product";

export default defineEventHandler(async (event: any) => {
  const orderId = event.context.params.id;
  let error = false;
  let status = "3";
  let message = "";

  const order: Order = await getOrderById(orderId);
  // const orderTamp = {...order , productId :order.productId.sort() }
  // const productList = await getProuductsByProductIds(order.productId);
  // productList.forEach((product, index) => {
  //   console.log(product.stock[0].quantity);
  //   console.log(orderTamp.quantities[index]);
  //   if (
  //     product.stock[0].quantity < orderTamp.quantities[index]
  //   ) {
  //     console.log("OutBuffer : ", product.id);
  //   }
  // });
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

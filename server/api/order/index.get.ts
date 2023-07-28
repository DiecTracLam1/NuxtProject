import { getOrderList } from "../../db/order";
import { getDetailProduct } from "../../db/product";
import { orderTransformer } from "../../transfomers/order";
import { Order } from "../../types/order.types";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { status = "1", _offset = 0 } = query;
  const tamp: any = {};
  if (status !== "1") {
    tamp.status = status;
  }

  // const user = await getUserById("64ae0bd6651cb2955effe5cb");

  const user = event.context.auth?.user;
  const orderList: Order[] = await getOrderList(user, tamp, _offset);
  const orderRespone = [];
  for (const orderItem of orderList) {
    const productList = await Promise.all(
      orderItem?.productId.map(async (productId: string, i: number) => {
        const product = await getDetailProduct(
          {
            include: {
              stock: true,
            },
          },
          productId
        );
        return {
          product,
          color: orderItem.colors[i],
          size: orderItem.sizes[i],
          quantity: orderItem.quantities[i],
        };
      })
    );
    orderRespone.push(orderTransformer(orderItem, productList));
  }
  return { data: orderRespone };
});

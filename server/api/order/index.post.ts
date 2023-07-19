import { createOrder } from "../../db/order";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { product, userId, totalPrice } = body;
  const productId:string[] = [];
  const colors:string[] = []
  const sizes:string[] = []
  const quantities:string[] = []
  product.map((item:any) => {
    productId.push(item.id);
    colors.push(item.color);
    sizes.push(item.size);
    quantities.push(item.quantity);
  })
  const order = await createOrder(productId , userId, totalPrice , colors , sizes , quantities);
  return { data: order };
});

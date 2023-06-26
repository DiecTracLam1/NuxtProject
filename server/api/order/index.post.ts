import { createOrder } from "../../db/order";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const {product , userId , image} = body;
    // // console.log(product)
    // console.log(body.totalPrice)

    const order = await createOrder(product , image , userId);
    return {data : order}
})
import { Product } from "../../model/product";

export const orderTransformer = (order: any, productList: Product[]) => {
  return {
    id: order.id,
    userId: order.userId,
    status: order.status,
    createdAt: order.createdAt,
    updatedAt: order.updatedAt,
    totalPrice: order.totalPrice,
    cancelMsg: order.cancelMsg,
    productList: productList,
  };
};

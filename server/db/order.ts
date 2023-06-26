import { prisma } from "./";

export const createOrder = (product: any, image: String[], userId: String) => {
  const data = {
    product,
    image,
    userId,
  };
  return prisma.order.create({
    data: data,
  });
};

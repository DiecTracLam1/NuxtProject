import { User } from "../types/user.types";
import { prisma } from "./";

export const createOrder = (
  productId: string[],
  userId: String,
  totalPrice: number,
  colors: string[],
  sizes: string[],
  quantities: string[]
) => {
  const data: any = {
    productId,
    userId,
    totalPrice,
    colors,
    sizes,
    quantities,
  };

  return prisma.order.create({
    data: data,
  });
};

export const getOrderList = (
  user: User,
  status: object,
  _offset: number | null | string | Record<string, any>
) => {
  return prisma.order.findMany({
    skip: Number(_offset),
    take: Number(6),
    where: {
      ...status,
      userId: user.id,
    },
  });
};

export const getOrderById = (orderId: string): any => {
  return prisma.order.findFirst({
    where: {
      id: orderId,
    },
  });
};

export const updateOrder = async (
  id: string,
  status: string,
  cancelMsg: string
) => {
  const updateOrder = await prisma.order.update({
    where: {
      id,
    },
    data: {
      status,
      cancelMsg,
    },
  });
};

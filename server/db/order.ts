import { User } from "../types/user.types";
import { prisma } from "./";

export const createOrder = (
  product: any,
  userId: String,
  totalPrice: number
) => {
  const data: any = {
    product,
    userId,
    totalPrice,
  };

  return prisma.order.create({
    data: data,
  });
};

export const getOrderList = (user: User, status: string, params: any = {}) => {
  return prisma.order.findMany({
    ...params,
    where: {
      status,
      userId: user.id,
    },
  });
};

export const updateOrder = async (id: string, status: string) => {
  const updateOrder = await prisma.order.update({
    where: {
      id,
    },
    data: {
      status,
    },
  });
};



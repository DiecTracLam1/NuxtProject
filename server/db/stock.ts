import { prisma } from "./";

export const updateStock = async (productId: any, quantity: number) => {
  const updateStock = await prisma.stock.updateMany({
    where: {
      productId,
      quantity: {
        gte: Number(quantity),
      },
    },
    data: {
      quantity: {
        decrement: quantity,
      },
    },
  });
  return updateStock;
};

export const getStock = async () => {};

import { prisma } from "./";

export const updateStock = async (productItem: any) => {
  const updateStock = await prisma.stock.updateMany({
    where: {
      productId: productItem.id,
      quantity: {
        gte:Number(productItem.quantity)
      }
    },
    data: {
      quantity: {
        decrement: productItem.quantity,
      },
    }
  });
  return updateStock
};

export const getStock = async () => {};

import { prisma } from "./";

export const getProducts = (params = {}) => {
  return prisma.product.findMany({
    ...params,
  });
};

export const getDetailProduct = (id: string) => {
  return prisma.product.findUnique({
    where: {
      id,
    },
  });
};

import { prisma } from "./";

export const getProducts = (params = {}) => {
  return prisma.product.findMany();
};
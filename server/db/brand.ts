import { prisma } from "./";

export const getBrands = (params = {}) => {
  return prisma.brand.findMany({
    ...params,
  });
};
import { prisma } from "./";

export const getProducts = async (params = {}, query = {}) => {
  const data = await prisma.$transaction([
    prisma.product.count(),
    prisma.product.findMany({
      ...params,
      where: {
        brand: {
          name: query?.brand,
        },
      },
      orderBy :{
       salePrice: "asc"
      }
    }),
  ]);
  return { total: data[0], products: data[1] };
};

export const getDetailProduct = (id: string) => {
  return prisma.product.findUnique({
    where: {
      id,
    },
  });
};

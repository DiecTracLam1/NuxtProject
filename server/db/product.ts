import { prisma } from "./";

export const getProducts = async (params = {}, query: any) => {
  const data = await prisma.$transaction([
    prisma.product.aggregate({
      where: {
        brand: {
          name: query?.brand,
        },
        salePrice: { gte: Number(query.minPrice), lte: Number(query.maxPrice) },
        type: { hasEvery: [query.type] },
        name: { contains: query.search },
        sizeList: { hasEvery: [query.size] },
        colorList: { hasEvery: [query.color] },
      },
      orderBy: {
        salePrice: query?._sort,
      },
      _count: true,
    }),
    prisma.product.findMany({
      ...params,
      where: {
        brand: { name: query?.brand },
        salePrice: { gte: Number(query.minPrice), lte: Number(query.maxPrice) },
        type: { hasEvery: [query.type] },
        name: { contains: query.search },
        sizeList: { hasEvery: [query.size] },
        colorList: { hasEvery: [query.color] },
      },
      orderBy: {
        salePrice: query?._sort,
      },
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

export const getRelatedProduct = (id: string , brandId:string) => {
  return prisma.product.findMany({
    where: {
      brand : {
        id : brandId
      },
      NOT:{
        id
      }     
    },
    take: Number(4),
  });
}

export const getBrandIdByProuductId = (id: string) => {
  return prisma.product.findUnique({
    where: {
      id,
    },
    select :{
      brandId : true
    }
  });
}
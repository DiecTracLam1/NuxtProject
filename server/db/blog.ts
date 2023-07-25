import { prisma } from "./";
import { Prisma } from "@prisma/client";

export const getBlogs = (params = {}) => {
  return prisma.blog.findMany({
    ...params,
  });
};

export const getBlogDetail = (params = {}, id: string) => {
  return prisma.blog.findUnique({
    ...params,
    where: {
      id,
    },
  });
};

export const updateBlog = (params = {}, id: string, data: any) => {
  return prisma.blog.update({
    where: {
      id,
    },
    data: {
      ...data,
    },
  });
};

export const createBlog = (data: any) => {
  return prisma.blog.create({
    data: data,
  });
};

export const getNextBlog = (id: string) => {
  return prisma.blog.findFirst({
    where: {
      id: { gt: id },
    },
    orderBy: {
      id: "asc",
    },

    take: 1,
  });
};

export const getPrevBlog = (id: string) => {
  return prisma.blog.findFirst({
    where: {
      id: { lt: id },
    },
    orderBy: {
      id: "desc",
    },

    take: 1,
  });
};


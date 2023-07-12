import { User } from "../types/user.types";
import { prisma } from "./";
import * as bcrypt from "bcrypt";

export const createUser = async (userData: User) => {
  const finalUserData = {
    ...userData,
    password: await bcrypt.hash(userData.password, 10),
  };
  return prisma.user.create({
    data: finalUserData,
  });
};

export const getUserByUsername = (username: string):any => {
  return prisma.user.findUnique({
    where: {
      username,
    },
  });
};

export const getUserById = (userId: string):any => {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
};

import { User } from "../types/user.types";
import { prisma } from "./";

export const createOrder = (product: any , user: String , totalPrice:number) => {
  const data:any = {
    product : {
      ...product
    },
    user,
    totalPrice,
  };
  console.log(data)
  return prisma.order.create({
    data: data,
  });
};

export const getOrder = (user:User,params:any = {})=>{
  return prisma.order.findMany({
    ...params,
    where:{
      userId: user.id
    }
  })
}

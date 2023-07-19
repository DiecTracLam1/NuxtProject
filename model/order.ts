import { Product } from "./product";
export interface OrderApi {
  data: [
    {
      id: string;
      userId: string;
      image: string;
      totalPrice: number | null;
      status: string;
      productList: ProductOrder[];
      cancelMsg: string;
    }
  ];
}

export type ProductOrder = {
  product: Product;
  color: string;
  size: string;
  quantity: number;
};

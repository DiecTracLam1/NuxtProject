import { Product } from "./product";
export interface OrderApi {
  data: [
    {
      id: string;
      userId: string;
      image: string;
      totalPrice: number | null;
      status: string;
      product: Product[];
    }
  ];
}

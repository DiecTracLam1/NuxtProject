export interface Product {
  id: string;
  name: string;
  image: Array<string> | string;
  price: number | null;
  salePrice: number;
  isSale: boolean;
  description: string | null;
  type: Array<string>;
  orderId: Array<string>;
  createdAt: string;
  updatedAt: string;
  brandId: string;
  sizeList: Array<string>;
  colorList: Array<string>;
  stock: Stock[];
}

export type Stock = {
  id: string;
  quantity: number;
  wareHouseId: string;
  productId: string;
};



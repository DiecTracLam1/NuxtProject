export interface Product {
  id: string;
  name: string;
  image: Array<string> | string;
  price: number | null;
  salePrice: number;
  isSale: boolean;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  brandId: string;
  quantity: number;
  sizeList: Array<string>;
  colorList: Array<string>;
  thumbnail: string;
  color?: string;
  size?: string;
  stock?: Stock[];
}

export type Stock = {
  id: string;
  quantity: number;
  wareHouseId: string;
  productId: string;
};

export type ProductListApi = {
  data: {
    products: Product[];
    total?: number;
  };
};

export type ProductApi = {
  data: Product;
  value: {
    data: Product;
  };
};

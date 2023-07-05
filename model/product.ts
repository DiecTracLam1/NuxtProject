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
  quantity?: number;
}

export type ProductApi = {
  data:{
    products : Product[]
    total : number
  }
}

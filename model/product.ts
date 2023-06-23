export interface Product {
  id: string;
  name: string;
  image: Array<string>;
  price: number | null;
  salePrice: number;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  brandId: string;
  quantity?: number
}

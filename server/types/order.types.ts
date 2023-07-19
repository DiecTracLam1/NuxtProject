export interface Order {
  id: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  totalPrice: number;
  cancelMsg?: string;
  userId: string;
  productId: string[];
  colors: string[];
  sizes: string[];
  quantities: number[];
}

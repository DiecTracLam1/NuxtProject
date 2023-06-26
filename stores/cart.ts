// Pinia Store
import { type } from "os";
import { defineStore } from "pinia";
import { Product } from "~/model/product";

export const useCartStore = defineStore("Cart", {
  state: () => ({
    cart: [] as Array<Product>,
  }),
  getters: {},
  actions: {
    addToCart(product: Product, quantity: number) {
      const ItemIndex = this.cart.findIndex(
        (item: Product) => item.id === product.id
      );
      if (ItemIndex >= 0) {
        this.cart[ItemIndex].quantity += quantity;
      } else {
        product.quantity = quantity;
        this.cart.push(product);
      }
    },

    setQuantity(quantity: number, product: Product) {
      const ItemIndex = this.cart.findIndex((x) => x.id == product.id);
      if (ItemIndex > 0) {
        this.cart[ItemIndex].quantity = quantity;
      }
      else{
        this.cart.splice(ItemIndex, 1)
      }
    },

    removeItemFromCart(id: string) {
      this.cart = this.cart.filter((item) => item.id != id);
    },
  },
});

// Pinia Store
import { defineStore } from "pinia";
import { Product } from "~/model/product";

export const useUserStore = defineStore("User", {
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
        this.cart.push(product);
      }
    },
    // clearUser () {
    //   this.$reset()
    // }
  },
});

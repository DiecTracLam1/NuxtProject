// Pinia Store
import { type } from "os";
import { defineStore } from "pinia";
import { Product } from "~/model/product";

export const useCartStore = defineStore("Cart", {
  state: () => ({
    cart: [] as Array<Product>,
  }),
  getters: {
    totalPrice: (state) => {
      const total = state.cart.reduce((current, nextValue) => {
        return (
          current +
          Math.round((nextValue.quantity * nextValue.salePrice * 100) / 100)
        );
      }, 0);
      return total;
    },
  },
  actions: {
    addToCart(product: Product, quantity: number, size: string, color: string) {
      const ItemIndex = this.cart.findIndex(
        (item: Product) => item.id === product.id
      );
      const cartItem = this.cart[ItemIndex];
      if (
        ItemIndex >= 0 &&
        cartItem.size === size &&
        cartItem.color === color
      ) {
        this.cart[ItemIndex].quantity += quantity;
      } else {
        product.quantity = quantity;
        product.size = size;
        product.color = color;
        this.cart.push(product);
      }
    },

    setQuantity(quantity: number, product: Product) {
      const ItemIndex = this.cart.findIndex((x) => x.id == product.id);
      if (ItemIndex >= 0) {
        this.cart[ItemIndex].quantity = quantity;
      } else {
        this.cart.splice(ItemIndex, 1);
      }
    },

    removeItemFromCart(id: string) {
      this.cart = this.cart.filter((item) => item.id != id);
    },

    async submitToApi({ totalPrice, userId, product }: any) {
      await $fetch("/api/order", {
        method: "POST",
        body: { totalPrice, userId, product },
      });
    },
  },
});

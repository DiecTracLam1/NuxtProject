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
      console.log(product);
      const ItemIndex = this.cart.findIndex(
        (item: Product) =>
          item.id === product.id && item.size === size && item.color === color
      );
      if (ItemIndex >= 0) {
        this.cart[ItemIndex].quantity += quantity;
      } else {
        const newProduct = { ...product };
        newProduct.quantity = quantity;
        newProduct.size = size;
        newProduct.color = color;
        this.cart.push(newProduct);
      }
    },

    setQuantity(quantity: number, product: Product) {
      const ItemIndex = this.cart.findIndex(
        (x) =>
          x.id == product.id &&
          x.size === product.size &&
          x.color === product.color
      );
      if (ItemIndex >= 0) {
        this.cart[ItemIndex].quantity = quantity;
      } else {
        this.cart.splice(ItemIndex, 1);
      }
    },

    removeItemFromCart(product: any) {
      const ItemIndex = this.cart.findIndex(
        (x) =>
          x.id == product.id &&
          x.size === product.size &&
          x.color === product.color
      );
      this.cart.splice(ItemIndex, 1);
    },

    async submitToApi({ totalPrice, userId, product }: any) {
      try {
        await $fetch("/api/order", {
          method: "POST",
          body: { totalPrice, userId, product },
        });
      } catch (error:any) {
        throw new Error(error.message)
      }
    },


  },
});

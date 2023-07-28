<template>
  <div class="py-3 text-right">
    <span class="text-sm">Order total : </span>
    <span class="text-[#ee4d2d] text-2xl">${{ order.totalPrice }}</span>
  </div>

  <div class="flex pt-3">
    <p v-if="order.cancelMsg" class="text-base text-red-400">
      Reason : {{ order.cancelMsg }}
    </p>
    <Button
      v-if="order.status === '1' || order.status === '2'"
      @click="onChangeVisible(order.id)"
      class="ml-auto normal-case tracking-normal"
      text="Cancel Order"
    />

    <Button
      v-if="order.status === '4' || order.status === '5'"
      @click="onClickBuyAgain(order.productList)"
      class="ml-auto normal-case tracking-normal"
      text="Buy again"
    />
  </div>
</template>
<script lang="ts" setup>
import { ProductOrder } from "model/order";
import { useCartStore } from "@/stores/cart";
defineProps({
  order: {
    type: Object,
    default: {},
  },
});
const emit = defineEmits(["openVisible"]);

const cartStore = useCartStore();

const onChangeVisible = (id: string) => {
  emit("openVisible", id);
};
const onClickBuyAgain = (productList: ProductOrder[]) => {
  productList.forEach((product) => {
    cartStore.addToCart(
      product.product,
      product.quantity,
      product.size,
      product.color
    );
  });
  navigateTo({
    path: "/cart",
  });
};
</script>

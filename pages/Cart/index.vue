<template>
  <BreadCrum title="Cart" />
  <div
    class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1170px] xl:max-w-[1170px] w-full px-[15px] mx-auto"
  >
    <div class="my-24">
      <div class="grid grid-cols-12 md:gap-[30px] gap-y-[30px]">
        <div class="col-span-12 md:col-span-8">
          <CartTable :data="data" />
        </div>

        <div class="col-span-12 md:col-span-4">
          <CartDiscount :data="data" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();

const data = computed(() => {
  return cartStore.cart.map((item) => {
    return {
      ...item,
      key: item.id,
      thumbnail: item.image[0],
      total: Math.round(item.quantity * item.salePrice * 100) / 100,
    };
  });
});
</script>

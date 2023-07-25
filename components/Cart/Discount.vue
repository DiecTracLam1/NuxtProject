<template>
  <h3 class="font-bold text-base mb-[35px]">DISCOUNT CODES</h3>
  <div class="flex mb-[60px]">
    <input
      class="flex-1 border-blur-grey border-[2px] pl-5 py-3 pr-2 outline-none w-full"
      placeholder="Coupon code"
      type="text"
    />
    <Button text="APPLY" size="xl" />
  </div>
  <div class="bg-[#F3F2EE] p-10">
    <h2 class="text-base mb-3">CART TOTAL</h2>
    <div class="flex items-center">
      <p class="text-base mb-0">Subtotal</p>
      <div class="flex items-center font-bold leading-10 text-lg ml-auto">
        <Icon
          name="ph:currency-dollar-simple-bold"
          color="#e53638"
          class="w-fit leading"
        />
        <p class="m-0 mt-[2px] text-[#e53638]">
          {{ cartStore.totalPrice }}
        </p>
      </div>
    </div>
    <div class="flex items-center">
      <p class="text-base mb-0">Total</p>
      <div class="flex items-center font-bold leading-10 text-lg ml-auto">
        <Icon
          name="ph:currency-dollar-simple-bold"
          color="#e53638"
          class="w-fit leading"
        />
        <p class="m-0 mt-[2px] text-[#e53638]">
          {{ cartStore.totalPrice }}
        </p>
      </div>
    </div>
    <Button
      @click="onSubmitCart"
      class="mt-6 w-full text-center"
      text="PROCEED TO ORDER"
    />
  </div>
</template>
<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
import { useUserStore } from "~/stores/user";
import { message } from "ant-design-vue";

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});

const cartStore = useCartStore();
const userStore = useUserStore();

async function onSubmitCart() {
  if (!userStore.$state.data.access_token) {
    message.error("Please login first");
    return;
  }

  if (cartStore.$state.cart.length <= 0) {
    message.error("There are no products to order");
    return;
  }

  const totalPrice = props.data.reduce(
    (initial, nextItem:any) => initial + nextItem.total,
    0
  );
  const userId = userStore.data.user?.id;
  const product = props.data;
  try {
    await cartStore.submitToApi({ totalPrice, userId, product });
    message.success("Order successfully");
    navigateTo({
      path: "/user/order",
    });
    cartStore.$reset();
  } catch (error) {
    message.error("Something went wrong");
  }
}
</script>

<template>
  <li v-for="order in orders.data" class="border-[1px] my-3 shadow-lg p-6">
    <OrderTitle :order="order" />

    <div
      v-for="product in order.productList"
      class="flex xs:flex-row flex-col xs:items-center border-y-[1px] mt-[10px] py-3"
    >
      <OrderProduct :product="product" />
    </div>

    <OrderBottom :order="order" @openModal="openModal" />
  </li>
</template>

<script lang="ts" setup>
import { OrderApi } from "model/order";
defineProps({
  orders: {
    type: Object as PropType<OrderApi>,
    required: true,
  },
});

const emit = defineEmits(["changeSpinning", "changeTabs", "changeOpenModal"]);

const openModal = (id: string) => {
  emit('changeOpenModal', id , true)
};
</script>

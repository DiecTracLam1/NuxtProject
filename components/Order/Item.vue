<template>
  <li v-for="order in orders.data" class="border-[1px] my-3 shadow-lg p-6">
    <OrderTitle :order="order" />

    <div
      v-for="product in order.productList"
      class="flex xs:flex-row flex-col xs:items-center border-y-[1px] mt-[10px] py-3"
    >
      <OrderProduct :product="product" />
    </div>

    <OrderBottom :order="order" @openVisible="openVisible" />

    <ModalOrder
      :orderId="removeId"
      :visible="visible"
      :spinning="spinning"
      :errorMsg="errorMsg"
      @onCloseVisible="onCloseVisible"
      @onCancleProduct="onCancelProduct"
      @onChangeCancelMsg="onChangeCancelMsg"
    />
  </li>
</template>
<script lang="ts" setup>
import { OrderApi } from 'model/order';



defineProps({
  orders: {
    type: Object as PropType<OrderApi>,
    required: true,
  },
  spinning: {
    type: Boolean,
    default: false,
  },
});

const removeId = ref("");
const visible = ref(false);
const pickedCancelMsg = ref("");
const errorMsg = ref("");

const openVisible = (id: string) => {
  removeId.value = id;
  visible.value = true;
};

const onCloseVisible = () => {
  visible.value = false;
};

const emit = defineEmits(["changeSpinning", "changeTabs"]);

const onChangeCancelMsg = (value: string) => {
  errorMsg.value = "";
  pickedCancelMsg.value = value;
};

const onCancelProduct = async () => {
  if (!pickedCancelMsg.value) {
    errorMsg.value = "Please selection cancellation reason";
    return;
  }
  emit("changeSpinning", true);
  await $fetch("/api/order", {
    method: "PUT",
    body: {
      orderId: removeId.value,
      status: "5",
      message: pickedCancelMsg.value,
    },
  });
  emit("changeTabs", "5");
  pickedCancelMsg.value = "";
  emit("changeSpinning", false);
  visible.value = false;
};
</script>

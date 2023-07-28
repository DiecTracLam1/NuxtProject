<template>
  <a-modal
    :visible="visible"
    :title="`Select Cancellation Reason`"
    centered
    :confirm-loading="spinning"
    okText="Cancel Order"
    @cancel="closeModal"
    @ok="cancelProduct"
  >
    <div>
      <div
        class="flex bg-[#f7f4ec] items-center py-1 px-2 border-[1px] border-yellow-300 mb-3"
      >
        <Icon
          name="ic:baseline-error-outline"
          class="text-yellow-500 text-[40px]"
        />
        <p class="m-0 ml-2">
          Please select a cancellation reason. Please take note that this will
          cancel all items in the order and the action cannot be undone.
        </p>
      </div>

      <div class="flex my-3">
        <input
          type="radio"
          name="errorMessg"
          value="Need to change delivery address"
          @click="changeCancelMsg"
        />
        <li class="ml-2 text-base">Need to change delivery address</li>
      </div>
      <div class="flex my-3">
        <input
          type="radio"
          name="errorMessg"
          value="Don't want to buy anymore"
          @click="changeCancelMsg"
        />
        <li class="ml-2 text-base">Don't want to buy anymore</li>
      </div>
      <div class="flex my-3">
        <input
          type="radio"
          name="errorMessg"
          value="Others"
          @click="changeCancelMsg"
        />
        <li class="ml-2 text-base">Others</li>
      </div>
      <p class="text-red-500">{{ errorMsg }}</p>
    </div>
  </a-modal>
</template>
<script lang="ts" setup>
import { ProductOrder } from "model/order";
import { useCartStore } from "@/stores/cart";
defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  spinning: {
    type: Boolean,
    default: false,
  },
  errorMsg: {
    type: String,
    default: "",
  },
  orderId: {
    type: String,
    required: true,
  },
});

const emit = defineEmits([
  "onCloseVisible",
  "onCancleProduct",
  "onChangeCancelMsg",
]);

const changeCancelMsg = (e: any) => {
  emit("onChangeCancelMsg", e.target.value);
};

const closeModal = () => {
  emit("onCloseVisible");
};

const cancelProduct = () => {
  emit("onCancleProduct");
};
</script>

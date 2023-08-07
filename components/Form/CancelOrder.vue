<template>
  <div class="p-6">
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
    <div class="border-t-[1px] flex mt-8 pt-4 justify-end">
      <Button @click="onCancelProduct" text="Cancel Order" size="xs" />
    </div>
  </div>
</template>
<script setup lang="ts">

const props = defineProps({
  orderId: {
    type: String,
    required: true,
  },
});

const pickedCancelMsg = ref("");
const errorMsg = ref("");
const emit = defineEmits(["changeSpinning", "changeTabs", "changeOpenModal"]);
const changeCancelMsg = (e: any) => {
  errorMsg.value = "";
  pickedCancelMsg.value = e.target.value;
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
      orderId: props.orderId,
      status: "5",
      message: pickedCancelMsg.value,
    },
  });
  emit("changeTabs", "5");
  pickedCancelMsg.value = "";
  emit("changeSpinning", false);
  emit("changeOpenModal", "", false);
};
</script>

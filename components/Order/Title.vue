<template>
  <div class="border-b-[1px] pb-3 text-end">
    <div v-if="order.status === '5'" class="text-red-500">
      <Icon class="text-lg" name="pepicons-pop:times-circle-filled" />
      Cancled
    </div>
    <div v-else class="text-[#26aa99]">
      <Icon name="mdi:truck-outline" class="text-lg" />
      {{ statusList[Number(order.status) - 1] }}
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  order: {
    type: Object,
    default: {},
  },
});
const statusList = [
  "",
  "Waiting for comfirm",
  "Waiting for the goods",
  "Success",
];
</script>

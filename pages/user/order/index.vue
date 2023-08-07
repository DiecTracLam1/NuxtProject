<template>
  <a-spin tip="Loading..." :spinning="pending">
    <div class="pb-[50px]">
      <div class="pt-3 mb-3">
        <OrderTab :activeKey="activeKey" @changeTabs="changeTabs" />
      </div>

      <ul v-if="orders?.data.length || 0 > 0" class="flex flex-col">
        <OrderItem
          v-if="orders"
          :orders="orders || null"
          @changeSpinning="changeSpinning"
          @changeTabs="changeTabs"
          @changeOpenModal="handleOpenModal"
        />
      </ul>

      <template v-else>
        <a-empty />
      </template>
    </div>

    <Modal
      :open="openModal"
      @closeModal="handleOpenModal"
      size="lg"
      title="Select Cancellation Reason"
    >
      <FormCancelOrder
        :orderId="orderId"
        @changeSpinning="changeSpinning"
        @changeTabs="changeTabs"
        @changeOpenModal="handleOpenModal"
      />
    </Modal>
  </a-spin>
</template>

<script setup lang="ts">
import { OrderApi } from "model/order";

definePageMeta({
  layout: "custom",
});

const router = useRouter();
const cookie = useCookie<any>("User");
const query = ref(router.currentRoute.value.query);
const activeKey = ref<any>(query.value?.status ?? "1");
const spinning = ref<boolean>(false);
const openModal = ref<boolean>(false);
const orderId = ref<String>("");

const changeSpinning = (check: boolean) => {
  spinning.value = check;
};

const changeTabs = (key: string) => {
  activeKey.value = key;
};

const handleOpenModal = (id: String, value: boolean) => {
  orderId.value = id;
  openModal.value = value;
};

watch(activeKey, () => {
  router.push({ query: { status: activeKey.value } });
});

const { data: orders, pending } = await useFetch<OrderApi>(
  () => {
    return `/api/order?status=${activeKey.value}`;
  },
  {
    headers: { Authorization: `Bearer ${cookie.value.data.access_token}` },
  }
);
</script>

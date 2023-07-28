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
        />
      </ul>

      <template v-else>
        <a-empty />
      </template>
    </div>
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

console.log(typeof activeKey.value);

const changeSpinning = (check: boolean) => {
  spinning.value = check;
};

const changeTabs = (key: string) => {
  activeKey.value = key;
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

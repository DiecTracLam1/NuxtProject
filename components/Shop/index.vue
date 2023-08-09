<template>
  <ShopSort :products="response ?? []" />
  <div class="grid grid-cols-12 sm:gap-x-7.5 gap-y-7.5 gap-x-0">
    <div
      v-if="loading"
      v-for="index in 12"
      class="col-span-12 sm:col-span-6 xl:col-span-4"
      :key="index"
    >
      <Skeleton />
    </div>

    <template v-else>
      <div v-if="!response?.data?.products.length" class="col-span-12">
        <div class="mx-auto">
          <a-empty />
        </div>
      </div>

      <div
        v-else
        v-for="product in response?.data?.products || 12"
        class="col-span-12 sm:col-span-6 xl:col-span-4"
        :key="product.id"
      >
        <ProductItem :product="product" />
      </div>
    </template>
  </div>

  <div v-if="response?.data?.products.length" class="my-8 text-center">
    <a-pagination
      v-model:current="page"
      :total="response?.data?.total"
      :defaultPageSize="defaultPageSize"
      @change="onChangePage"
    />
  </div>
</template>
<script setup lang="ts">
import { ProductListApi } from "~/model/product";

const router = useRouter();
const { queryState, setQuery } = useRouteState();
const defaultPageSize = ref(12);
const page = ref<number>(Number(queryState.value?.page) || 1);
const _limit = ref<number>(Number(queryState.value?._offset) || 12);
const _offset = ref<number>(_limit.value * (page.value - 1));
const queryString = ref<string>(
  new URLSearchParams(queryState.value).toString()
);

const onChangePage = async (current: number) => {
  _offset.value = (current - 1) * _limit.value;
  setQuery({ _offset: _offset.value, page: current });
};

watch(queryState, async () => {
  queryString.value = new URLSearchParams(queryState.value).toString();
  router.push({ query: queryState.value });
  // reloadNuxtApp()
});

const loading = ref(true);

const { data: response, pending } = await useFetch<ProductListApi>(
  () => `/api/product?${queryString.value}`
);

if (response.value?.data.products && response.value?.data.products.length > 0) {
  setTimeout(() => {
    loading.value = pending.value;
  });
}

watch(pending, () => {
  console.log(pending);
  loading.value = pending.value;
});
</script>

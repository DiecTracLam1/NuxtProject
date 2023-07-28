<template>
  <ShopSort :products="products ?? []" />
  <div class="grid grid-cols-12 sm:gap-7.5">
    <div v-if="!products?.data?.products.length" class="col-span-12">
      <div class="mx-auto">
        <a-empty />
      </div>
    </div>
    <template v-else>
      <div
        v-for="product in products?.data?.products"
        class="col-span-12 sm:col-span-6 md:col-span-4"
      >
        <Skeleton v-if="pending" />
        <ProductItem v-else :product="product" />
      </div>
    </template>
  </div>

  <div v-if="products?.data?.products.length" class="my-8 text-center">
    <a-pagination
      v-model:current="page"
      :total="products?.data?.total"
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

watch(queryState, () => {
  queryString.value = new URLSearchParams(queryState.value).toString();
  router.push({ query: queryState.value });
});

const { data: products, pending } = await useFetch<ProductListApi>(
  () => `/api/product?${queryString.value}`
);
</script>

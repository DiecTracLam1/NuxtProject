<template>
  <div>
    <div class="bg-[#f6f6f6] h-[140px]">
      <div
        class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] px-[15px] mx-auto h-full"
      >
        <div class="flex flex-col justify-center h-full">
          <h4 class="text-2xl font-bold mb-2">Shop</h4>
        </div>
      </div>
    </div>

    <div
      class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] w-full px-[15px] mx-auto pt-[100px]"
    >
      <div class="grid grid-cols-12 gap-y-[50px] md:gap-[50px]">
        <div class="col-span-12 md:col-span-3">
          <NavBarShop />
        </div>

        <div class="col-span-12 md:col-span-9">
          <div class="flex mb-11">
            <p class="leading-6 text-normal">
              {{
                `Showing 1-${products?.data?.products.length} of ${products?.data?.total} results`
              }}
            </p>
            <div class="leading-6 text-normal ml-auto">
              Sort By Pirce
              <a-select
                ref="select"
                :defaultValue="_sort"
                style="width: 120px"
                @change="onChangeOption"
              >
                <a-select-option value="asc">Low To High</a-select-option>
                <a-select-option value="desc">High to Low</a-select-option>
              </a-select>
            </div>
          </div>
          <div class="grid grid-cols-12 sm:gap-7.5">
            <ProductList :products="products?.data?.products" />
            <!-- <ul>
              <li v-for="product in products.data.products">
                {{ product?.name }}
                <p>------</p>
              </li>
            </ul> -->
          </div>

          <div class="my-8 text-center">
            <a-pagination
              v-model:current="page"
              :total="products?.data?.total"
              :defaultPageSize="defaultPageSize"
              @change="onChangePage"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { $productPluxgin } = useNuxtApp();
import { ProductListApi } from "~/model/product";
import { useProductStore } from "~/stores/product";
const productsStore = useProductStore();
const router = useRouter();
const { queryState, setQuery } = useRouteState();
const defaultPageSize = ref(12);
const page = ref<number>(Number(queryState.value?.page) || 1);
const _limit = ref<number>(Number(queryState.value?._offset) || 12);
const _offset = ref<number>(_limit.value * (page.value - 1));
const _sort = ref<String>(queryState.value?._sort || "asc");
const queryString = ref<string>(
  new URLSearchParams(queryState.value).toString()
);
// $productPluxgin(_offset.value, _limit.value);

const onChangeOption = (value: string) => {
  setQuery({ _sort: value });
};
const onChangePage = async (current: number) => {
  _offset.value = (current - 1) * _limit.value;
  setQuery({ _offset: _offset.value, page: current });
  // await  $productPluxgin(_offset.value, _limit.value);
};

watch(queryState, () => {
  queryString.value = new URLSearchParams(queryState.value).toString();
  router.push({ query: queryState.value });
});

const { data: products } = await useFetch<ProductListApi>(
  () => `/api/product?${queryString.value}`
);

// const { data: products } = await useAsyncData(
//   "products",
//   async () => {
//     if (process.server) {
//       const dataProducts = await $fetch("/api/product", {
//         params: { _limit: _limit.value, _offset: _offset.value },
//       });
//       console.log("InFetch", dataProducts);
//       return dataProducts;
//     }
//     // console.log(nuxtApp)
//     // products.value = dataProducts.data;
//     // return dataProducts;
//   },
//   {
//     watch: [_offset],
//   }
// );
</script>

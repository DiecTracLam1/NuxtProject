<template>
  <div>
    <div class="bg-[#F3F2EE] h-[140px]">
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
            <p class="leading-6 text-normal">Showing 1-12 of 126 results</p>
            <div class="leading-6 text-normal ml-auto">
              Sort By Pirce
              <a-select
                sty
                ref="select"
                defaultValue="inc"
                style="width: 120px"
                @focus="focus"
                @change="handleChange"
                :bordered="false"
              >
                <a-select-option value="inc">Low To High</a-select-option>
                <a-select-option value="lucy">High to Low</a-select-option>
              </a-select>
            </div>
          </div>
          <div class="grid grid-cols-12 sm:gap-7.5">
            <!-- <ProductList :products="products.data.products" /> -->
            <ul>
              <li v-for="product in products.data.products">
                {{ product?.name }}
                <p>_______________</p>
              </li>
            </ul>
          </div>

          <div class="my-8 text-center">
            <a-pagination
              v-model:current="page"
              :total="500"
              show-size-changer
              @change="onChangePage"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const products:any = ref([])
const nuxtApp = useNuxtApp();
const total = ref("");
const page = ref(1);
const productLogCount = 1;
const _offset = ref(productLogCount * (page.value - 1));

const onChangePage = (current: number) => {
  console.log(current);
  _offset.value = (current - 1) * productLogCount;
  console.log(_offset.value)
  a()
};

const a = async() => {
  console.log(_offset.value)
  console.log(productLogCount)
  const { data } = await useFetch("/api/product", {
    query: { _limit: productLogCount, _offset: _offset.value },
  });
  console.log(data)
  products.value = data.value
  console.log(products.value)
}
a()

// const { data: products } = await useAsyncData(
//   "products",
//   async () => {
//     const dataProducts = await $fetch("/api/product", {
//       params: { _limit: productLogCount, _offset: _offset.value },
//     });
//     console.log("InFetch", dataProducts);
//     console.log(nuxtApp)
//     // products.value = dataProducts.data;
//     return dataProducts;
//   },
//   {
//     watch: [_offset],
//   }
// );

// products.value = data.value.data;
</script>

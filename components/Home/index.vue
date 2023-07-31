<template>
  <div>
    <Slides />

    <!-- Product -->
    <div
      class="md:max-w-[960px] xl:max-w-[1170px] px-[15px] mx-auto my-[100px]"
    >
      <HomeFilter />
      <div
        class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] px-[15px] mx-auto"
      >
        <div class="grid grid-cols-12 sm:gap-x-7.5 gap-y-10">
          <div
            v-for="product in products?.data?.products"
            class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3"
          >
            <ProductItem :product="product" />
          </div>
        </div>
      </div>
    </div>

    <Spad />

    <Instagram />

    <LastestSpad />
  </div>
</template>
<script setup lang="ts">
import { ProductListApi } from "model/product";

const { data: products } = await useFetch<ProductListApi>(
  () => `/api/product?_limit=8`
);
</script>

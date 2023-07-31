<template>
  <div>
    <div class="bg-[#f6f6f6]">
      <div
        class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] px-[15px] w-full mx-auto"
      >
        <div class="py-10">
          <div class="text-center">
            <p class="text-sm mb-[30px]">Home > Shop > Product Details</p>
          </div>

          <div class="grid grid-cols-12 sm:gap-[30px]">
            <div class="sm:col-span-4 col-span-12">
              <ul
                class="flex sm:flex-col flex-row sm:items-center justify-center"
              >
                <li
                  v-for="image in product?.data.image"
                  class="cursor-pointer mb-2"
                >
                  <div @click="onChangeBigImg(image)" class="h-[120px]">
                    <img class="w-full h-full" :src="image" alt="" />
                  </div>
                </li>
              </ul>
            </div>
            <div class="sm:col-span-8 col-span-12">
              <div class="mx-auto sm:w-full w-fit h-[533px]">
                <img class="h-full" :src="bigImage" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] px-[15px] w-full mx-auto"
    >
      <div class="mt-[100px] text-center">
        <h4 class="font-bold leading-7 text-2xl">{{ product?.data.name }}</h4>

        <!-- Rate & Favorite -->
        <div class="flex flex-col xs:flex-row justify-center items-center my-2">
          <a-rate />
          <span class="mx-2"> - </span>
          <span class="font-bold">
            <Icon
              class="text-lg hover:cursor-pointer peer"
              name="uil:heart"
              color="black"
            />
            ADD TO WISHLIST
          </span>
        </div>

        <!-- Price -->
        <div class="flex justify-center items-center my-4">
          <p class="font-bold leading-9 text-3xl mr-3 my-0">
            ${{ product?.data.salePrice }}
          </p>
          <p class="text-xl text-blur-grey line-through my-0">
            ${{ product?.data.price }}
          </p>
        </div>

        <!-- Description -->
        <p class="text-base leading-7 mb-6">
          {{ product?.data.description }}
        </p>

        <FormDetail
          @submitForm="submitFormToCart"
          :sizeList="product?.data.sizeList"
          :colorList="product?.data.colorList"
          :stock="product?.data.stock || []"
        />

        <!-- Checkout -->
        <div
          class="relative mb-5 before:absolute xs:before:w-[460px] before:w-[230px] before:h-[1px] before:bg-blur-grey before:top-3 before:left-1/2 before:translate-x-[-50%] before:z-[-1]"
        >
          <span class="bg-white xs:text-xl text-base font-bold px-3"
            >Guaranteed Safe Checkout</span
          >
        </div>
        <img class="mx-auto" src="~/assets/images/details-payment.png" alt="" />
      </div>

      <!-- Nav Tab -->

      <Description />
      <template>
        <a-alert message="Info Text" type="info" close-text="Close Now" />
      </template>

      <!-- Related Product -->
      <div class="py-[60px]">
        <h2 class="font-bold text-3xl mx-auto mb-11 w-fit">Related Product</h2>
        <div class="grid grid-cols-12 xs:gap-[30px]">
          <div
            v-for="product in productRelated?.data.products"
            class="xs:col-span-6 sm:col-span-6 md:col-span-4 xl:col-span-3 col-span-12"
          >
            <ProductItem :product="product" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
import { ProductApi, ProductListApi } from "~/model/product";

// pinia cart store
const store = useCartStore();

// get product detail
const route = useRoute();

const { data: product } = await useAsyncData<ProductApi>("productDetail", () =>
  $fetch(`/api/product/${route.params.id}`)
);

const { data: productRelated } = await useAsyncData<ProductListApi>(
  "productRelated",
  () => $fetch(`/api/product/related/${route.params.id}`)
);

// set big image

const bigImage = ref(product?.value?.data.image[0]);
function onChangeBigImg(value: string) {
  bigImage.value = value;
}

// form
function submitFormToCart(value: any) {
  if (product?.value)
    store.addToCart(
      product?.value.data,
      value.quantity,
      value.size,
      value.color
    );
}
</script>

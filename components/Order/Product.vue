<template>
  <div class="flex flex-1 pr-3">
    <div class="w-[78px] h-[78px]">
      <img class="w-full h-full" :src="product.product.image[0]" alt="" />
    </div>
    <div class="flex flex-1 flex-col pl-3">
      <a-typography-paragraph
        :ellipsis="{ rows: 2 }"
        :content="product.product.name"
        class="text-base"
      />
      <p class="text-blur-grey">
        Variation: {{ product.color }} - {{ product.size }}
      </p>
      <span>x{{ product.quantity }}</span>
    </div>
  </div>
  <div class="flex justify-self-end text-lg xs:pl-0 pl-[90px]">
    <span class="text-blur-grey line-through mr-3 my-0"
      >${{ product.product.price }}</span
    >
    <span class="text-[#ee4d2d] my-0">${{ product.product.salePrice }}</span>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  product: {
    type: Object,
    default: {},
  },
});
</script>

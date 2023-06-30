<template>
  <div class="flex flex-col overflow-hidden hover:cursor-pointer group">
    <div class="h-[260px] relative">
      <img class="w-full h-full" :src="props.product.image[0]" alt="" />
      <span
        class="absolute bg-white font-bold top-5 text-[11px] px-[15px] py-1 inline-block"
        >NEW</span
      >
      <ul
        class="absolute top-5 right-[-100px] text-[11px] group-hover:right-5 transition-all duration-[700ms]"
      >
        <li class="bg-white mb-[10px] p-[10px] text-base leading-4">
          <span><Icon class="" name="uil:heart" /></span>
        </li>
        <li
          @click="onNavigate(props.product.id)"
          class="bg-white mb-[10px] p-[10px] text-base leading-4"
        >
          <span><Icon class="" name="uil:search" /></span>
        </li>
      </ul>
    </div>
    <div class="relative mt-6">
      <p class="text-[18px] mb-[5px]">{{ props.product.name }}</p>
      <div class="mb-[6px]"><a-rate /></div>
      <p class="text-[18px] font-bold">${{props.product.salePrice}}</p>
      <button
        class="absolute text-white bottom-3 right-[-100px] group-hover:right-5 bg-black py-1 px-2 text-xs transition-all duration-[700ms]"
      >
        +Add to cart
      </button>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  product: {
    type: Object,
    default: null,
  },
});

const onNavigate = (id) => {
  navigateTo({
    path: `/shop/${id}`,
  });
};
</script>

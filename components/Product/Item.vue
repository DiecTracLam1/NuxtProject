<template>
  <div class="flex flex-col overflow-hidden hover:cursor-pointer group">
    <div class="h-[260px] relative">
      <img class="w-full h-full" :src="product.image[0]" alt="" loading="lazy"/>
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
          @click="onNavigate(product.id)"
          class="bg-white mb-[10px] p-[10px] text-base leading-4"
        >
          <span><Icon class="" name="uil:search" /></span>
        </li>
      </ul>
    </div>
    <div class="relative mt-6">
      <a-typography-paragraph
        class="text-[18px] mb-[5px]"
        :ellipsis="{ rows: 2 }"
        :content="product.name"
      />
      <div class="mb-[6px]"><a-rate /></div>
      <div class="flex items-center">
        <p class="font-bold m-0 text-[18px]">${{ product.salePrice }}</p>
        <p
          v-if="product.isSale"
          class="line-through text-sm m-0 ml-2 text-blur-grey"
        >
          ${{ product.price }}
        </p>
      </div>

      <Button
        size="xs"
        class="absolute bottom-3 right-[-100px] group-hover:right-5 transition-all duration-[700ms]"
      >
        <Icon name="bi:cart-plus-fill" class="text-lg" />
      </Button>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const onNavigate = (id) => {
  navigateTo({
    path: `/shop/${id}`,
  });
};
</script>

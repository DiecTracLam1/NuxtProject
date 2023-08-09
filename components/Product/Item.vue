<template>
  <NuxtLink
    :to="`/shop/${product.id}`"
    class="flex flex-col overflow-hidden text-black hover:cursor-pointer group"
  >
    <div class="h-[320px] relative">
      <img
        class="h-full w-full"
        :data-src="product.image[0]"
        :src="product.image[0]"
        loading="lazy"
      />
      <span
        class="absolute bg-white font-bold top-5 text-[11px] px-[15px] py-1 inline-block"
        >NEW</span
      >
      <ul
        class="absolute top-5 right-[-100px] text-[11px] group-hover:right-5 transition-all duration-[700ms]"
      >
        <li class="bg-white mb-[10px] p-[10px] text-base leading-4">
          <span><Icon @click.prevent="onFavorite" name="uil:heart" /></span>
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
      <p class="text-ellipsis text-lg line-clamp-2 mb-[5px] min-h-[60px]">
        {{ product.name }}
      </p>

      <div class="mb-3 z-50">
        <Icon
          v-for="i in 5"
          :key="i"
          class="text-xl"
          :class="i <= rating ? 'text-yellow-400' : ''"
          @mouseover="onRating(i)"
          @mouseleave="rating = 0"
          @click.prevent="onRate(i)"
          name="material-symbols:star-rounded"
        />
      </div>

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
  </NuxtLink>
</template>
<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const rating = ref(0);
const onRating = (index) => {
  if (index !== rating.value) rating.value = index;
};

const onRate = (i) => {
};

const onFavorite = () =>{

}

const onNavigate = (id) => {
  navigateTo({
    path: `/shop/${id}`,
  });
};
</script>

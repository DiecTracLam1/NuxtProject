<template>
  <div
    v-for="product in props.products"
    class="col-span-12 sm:col-span-6 md:col-span-4"
  >
    <ProductItem :product="product" />
  </div>
</template>
<script setup>
console.log("List")
const productTamp = ref()
const props = defineProps({
  products: {
    type: Array,
    default: [],
  },
});
watch(products)
</script>

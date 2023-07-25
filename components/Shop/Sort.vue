<template>
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
</template>
<script setup lang="ts">
defineProps({
  products: {
    type: Object,
    required: true
  },
});
const { queryState, setQuery } = useRouteState();
const _sort = ref<String>(queryState.value?._sort || "asc");

const onChangeOption = (value: string) => {
  setQuery({ _sort: value });
};
</script>

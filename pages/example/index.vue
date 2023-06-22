<template>
  <div>
    <ul>
      <li
        v-for="cafe in cafes.data"
        :key="cafe.id"
        v-text="cafe.company.name + ' - ' + cafe.location_name"
      ></li>
    </ul>

    <button @click="previous()" v-if="page > 1">Previous</button>
    <button @click="next()" v-if="page < cafes.last_page">Next</button>

    <input ref="text" type="text">
  </div>
</template>
<script setup>
const search = ref("");
const page = ref(1);
const text = ref("asda");

const { data: cafes, error } = await useAsyncData(
  "cafes",
  () =>
    $fetch(`/api/v1/cafes`, {
      method: "GET",
      baseURL: "https://api.roastandbrew.coffee",
      params: {
        page: page.value,
        search: search.value,
      },
    }),
  {
    watch: [page, search],
  }
);
console.log(text.value)

const previous = () => {
  if (page.value != 1) {
    page.value = page.value - 1;
  }
};

const next = () => {
  if (page.value + 1 <= cafes.value.last_page) {
    page.value = page.value + 1;
  }
};
</script>

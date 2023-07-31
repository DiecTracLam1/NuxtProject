<template>
  <div
    class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] w-full px-[15px] mx-auto my-[100px]"
  >
    <div class="text-center mb-[45px]">
      <h5 class="text-[#E53638] mb-[15px]">LATEST NEWS</h5>
      <h2 class="text-4xl font-bold">Fashion New Trends</h2>
    </div>
    <div class="grid grid-cols-12 sm:gap-x-[30px] gap-y-[30px]">
      <div
        v-for="blog in blogs?.data"
        class="col-span-12 sm:col-span-6 md:col-span-4"
      >
        <Blog :blog="blog" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { BlogApi } from "model/blog";
const { data: blogs } = await useFetch<BlogApi>("/api/blog");
</script>

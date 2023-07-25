<template>
  <div>
    <div
      class="bg-[url('@/assets/images/breadcrumb-bg.jpg')] flex justify-center items-center h-[350px]"
    >
      <p class="font-bold m-0 text-white text-6xl">Our Blog</p>
    </div>

    <div
      class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] mx-auto my-[100px]"
    >
      <div class="grid grid-cols-12 gap-[30px]">
        <div
          v-for="blog in blogs?.data"
          class="col-span-12 sm:col-span-6 md:col-span-4"
        >
          <Blog :blog="blog" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { BlogApi } from "model/blog";
const { data: blogs } = await useFetch<BlogApi>(`/api/blog?_limit=9`);
</script>

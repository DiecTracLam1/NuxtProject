<template>
  <div class="relative">
    <div class="h-[270px]">
      <img
        class="h-full w-full"
        v-lazy="blog.titleImage"
        :data-src="blog.titleImage"
        alt=""
      />
    </div>
    <div
      class="bg-white mt-[-15%] mx-auto p-[30px] w-[300px] shadow-md relative z-10"
    >
      <span class="text-[13px] text-[#919191]">
        <Icon class="mr-1 mb-1" name="tabler:calendar-check" />{{
          $dayjs(blog.updatedAt).format("D MMMM YYYY")
        }}</span
      >
      <h5 class="text-lg text-ellipsis line-clamp-2 font-bold mt-[6px] mb-4">
        {{ blog.title }}
      </h5>
      <p
        class="font-bold relative text-[13px] tracking-[4px] leading-5 w-fit hover:cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-black after:w-1/2 after:h-[2px] hover:after:w-full hover:after:bg-red-400 after:transition-all after:duration-750"
        @click="onRedirectToDetail(blog.id)"
      >
        READ MORE
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  blog: {
    type: Object,
    required: true,
  },
});

const onRedirectToDetail = (id: String) => {
  navigateTo({
    path: `/blog/${id}`,
  });
};
</script>

<template>
  <div class="relative">
    <div class="h-[270px]">
      <img class="h-full w-full" :src="imageUrl" alt="" />
    </div>
    <div
      class="bg-white mt-[-15%] mx-auto p-[30px] w-[300px] shadow-md relative z-10"
    >
      <span class="text-[13px] text-[#919191]">
        <Icon class="mr-1 mb-1" name="tabler:calendar-check" />16 February
        2020</span
      >
      <h5 class="text-lg font-bold my-[6px]">
        {{ title }}
      </h5>
      <p
        class="font-bold relative text-[13px] tracking-[4px] leading-5 w-fit hover:cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-black after:w-1/2 after:h-[2px] hover:after:w-full hover:after:bg-red-400 after:transition-all after:duration-750"
      >
        READ MORE
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "",
  },
});
const imageUrl = `/_nuxt/assets/images/${props.image}`;
</script>

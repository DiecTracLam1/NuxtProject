<template>
  <div class="bg-[#f6f6f6] h-[140px]">
    <div
      class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] px-[15px] mx-auto h-full"
    >
      <div class="flex flex-col justify-center h-full">
        <h4 class="text-2xl font-bold mb-2">{{title}}</h4>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  title: {
    type: String,
  },
});
</script>

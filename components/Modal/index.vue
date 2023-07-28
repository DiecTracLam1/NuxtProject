<template>
  <div
    class="fixed top-full left-1/2 w-2/5 bg-white transition-all duration-500 text-start translate-x-[-50%] translate-y-[100%] peer-checked:top-1/2 peer-checked:translate-y-[-50%] opacity-0 z-20 peer-checked:block peer-checked:opacity-100"
  >
    <div class="relative text-center p-6 border-b-[1px] mb-3">
      <h1 class="text-lg m-0">{{ title }}</h1>
      <span
        @click="handleCloseModal(false)"
        class="absolute top-1/2 right-6 translate-y-[-50%] cursor-pointer text-xl"
      >
        <Icon name="humbleicons:times" />
      </span>
    </div>
    <slot />
  </div>
</template>
<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["closeModal"]);

function handleCloseModal(check: boolean) {
  emit("closeModal", check);
}
</script>

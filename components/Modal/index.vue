<template>
  <div
    class="fixed top-0 left-0 bottom-0 right-0 bg-[#000000] opacity-50 z-30 peer-checked:block"
    :class="open ? 'block' : 'hidden'"
    @click="handleCloseModal(false)"
  ></div>
  <div
    class="fixed left-1/2 w- bg-white transition-all duration-500 text-start translate-x-[-50%] z-30"
    :class="`${classes} ${
      open
        ? 'block top-1/2 translate-y-[-50%] opacity-100'
        : 'top-full translate-y-[100%] opacity-0 '
    }`"
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
const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "md",
  },
});

const widthClasses = computed(() => {
  switch (props.size) {
    case "xs":
      return "w-1/5";
    case "md":
      return "w-1/4";
    case "lg":
      return "w-1/3";
    case "xl":
      return "w-2/5";
  }
});
const emit = defineEmits(["closeModal"]);

function handleCloseModal(check: boolean) {
  emit("closeModal", check);
}

const classes = computed(() => `${widthClasses.value}`);
</script>

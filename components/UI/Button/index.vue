<template>
  <NuxtLink
    class="inline-block bg-black text-white w-fit tracking-[4px] uppercase font-bold hover:cursor-pointer hover:text-white"
    :class="classes"
  >
    {{ props.text }}
    <slot />
  </NuxtLink>
</template>
<script setup>
const props = defineProps({
  size: {
    type: String,
    default: "md",
  },
  text:{
    type: String,
    default:""
  }
});

const paddingClasses = computed(() => {
  switch (props.size) {
    case "sm":
      return "py-2 px-3";
    case "lg":
      return "px-4 py-3";
    case "xl":
      return "px-[30px] py-[14px]";
    default:
      return "px-3 py-3";
  }
});

const textFontSize = computed(() => {
  switch (props.size) {
    case "lg":
      return "text-md";
    default:
      return "text-sm";
  }
});

const classes = computed(() => `${paddingClasses.value} ${textFontSize.value}`);
</script>

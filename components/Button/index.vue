<template>
  <button
    class="block bg-black text-white w-fit tracking-[4px] uppercase font-bold hover:cursor-pointer"
    :class="classes"
  >
    {{ props.text }}
    <slot />
  </button>
</template>
<script setup>
const props = defineProps({
  size: {
    type: String,
    default: "md",
  },
  text: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "black",
  },
});

const paddingClasses = computed(() => {
  switch (props.size) {
    case "xs":
      return "px-3 py-2 ";
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
    case "xs":
      return "text-xs";
    case "lg":
      return "text-md";
    default:
      return "text-sm";
  }
});

const classes = computed(
  () =>
    `${paddingClasses.value} ${textFontSize.value} ${
      props.color === "white" ? "bg-white text-black " : ""
    }`
);
</script>

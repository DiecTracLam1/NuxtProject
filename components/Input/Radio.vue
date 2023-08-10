<template>
  <div class="flex items-center text-sm">
    <input type="radio" :id="title" :name="props.name" :checked="checked" />
    <label class="ml-1" :for="title">{{ props.title }}</label>
  </div>
</template>
<script setup>
const props = defineProps({
  name: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    default: "",
  },
  checked: {
    type: Boolean,
    default: false,
  },
});
</script>

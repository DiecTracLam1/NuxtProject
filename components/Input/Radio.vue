<template>
  <div class="flex items-center text-sm">
    <input type="radio" id="huey" :name="props.name" />
    <label class="ml-1" for="huey">{{ props.title }}</label>
  </div>
</template>
<script setup>
const props = defineProps({
  name: {
    type: String,
    require:true,
  },
  title :{
    type: String,
    default:""
  }
});
</script>

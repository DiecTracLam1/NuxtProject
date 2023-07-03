<template>
  <div
    class="bg-black inline-flex items-center mr-2 mb-3 py-1 pl-2 pr-1 text-white"
  >
    <a-typography-text
      :style="{ width:'60px', color: 'white' }"
      :ellipsis="{ tooltip: true }"
      :content="props.title"
    />
    <Icon
      @click="handleClickCloseTag"
      class="cursor-pointer ml-1 text-base"
      name="typcn:times"
    />
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["closeTag"]);

function handleClickCloseTag() {
  emit("closeTag", props.name);
}
</script>

<template>
  <div>
    <input
      type="number"
      class="border-blur-grey border-[1px] font-bold text-center py-[13px] px-[15px] mr-6 xs:mb-0 mb-[15px] outline-none"
      min="1"
      max="20"
      name="quantity"
      v-model="value"
    />

    <span class="mr-auto" :class="errorMessage && 'text-red-500'">{{ errorMessage }}</span>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useField } from "vee-validate";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "number",
  },
});

const { errorMessage, value } = useField(props.name);
</script>


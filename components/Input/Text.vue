<template>
  <div class="text-start my-4">
    <input
      v-model="value"
      class=" border-[#e3e5e9] border-[2px] w-full p-4"
      name="username"
      :type="props.type"
      :class="errorMessage && 'border-red-500'"
      :placeholder="placeholder"
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
    default: "text",
  },
  placeholder :{
    type: String,
    default : "",
  }
});

const { errorMessage, value } = useField(props.name);
</script>

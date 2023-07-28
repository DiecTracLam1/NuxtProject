<template>
  <Field
    class="hidden peer"
    type="radio"
    :name="name"
    :id="size"
    :value="size"
  />
  <label
    class="border-blur-grey border-[1px] font-bold text-[15px] py-2 px-[17px] inline-block peer-checked:text-white peer-checked:bg-black hover:cursor-pointer"
    :class="isChecked && 'bg-black text-white'"
    :for="size"
    >{{ size }}</label
  >
</template>

<script setup>
import { defineProps } from "vue";
import { Field } from "vee-validate";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  isChecked: {
    type: Boolean,
    default: false,
  },
});
</script>

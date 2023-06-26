<template>
  <Field
    class="hidden peer"
    type="radio"
    :name="name"
    :id="value"
    :value="value"
  />
  <label
    class="inline-block w-[30px] h-[30px] p-[1px] rounded-full border-[#e3e1e8] border-[1px] peer-checked:scale-[1.2] peer-checked:border-black hover:cursor-pointer"
    :for="value"
  >
    <span class="inline-block w-full h-full rounded-full" :class="classColor" />
  </label>
</template>
<script setup>
import { defineProps } from "vue";
import { Field } from "vee-validate";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const classColor = `bg-${props.value}-500`;
</script>

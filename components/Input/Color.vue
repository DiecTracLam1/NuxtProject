<template>
  <Field
    class="hidden peer"
    type="radio"
    :name="name"
    :id="value"
    :value="value"
  />
  <label
    class="inline-block w-9 h-9 p-[1px] rounded-full border-[#e3e1e8] border-[1px] peer-checked:scale-[1.2] peer-checked:border-black hover:cursor-pointer"
    :for="value"
  >
    <span
      class="inline-block w-full h-full rounded-full"
      :class="{
        [`${COLOR.green}`]: value === 'green',
        [`${COLOR.blue}`]: value === 'blue',
        [`${COLOR.black}`]: value === 'black',
      }"
    />
  </label>
</template>
<script setup>
import { defineProps } from "vue";
import { Field } from "vee-validate";
import { COLOR } from "@/utils/getColor";

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
// class="inline-block w-full h-full rounded-full"
</script>

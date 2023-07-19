<template>
  <div class="">
    <input
      type="number"
      class="border-blur-grey border-[1px] font-bold text-center py-[13px] px-[15px] mr-6 xs:mb-0 mb-[15px] outline-none"
      min="1"
      :max="maxQuantity"
      :class="classes"
      name="quantity"
      v-model="value"
      v-on:keyup="onChangeInput"
    />
    <p class="mr-auto" :class="errorMsg && 'text-red-500'">{{ errorMsg }}</p>
  </div>
</template>

<script setup lang="ts">
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
  maxQuantity: {
    type: Number,
    default: 1,
  },
});

const { value, errorMessage } = useField(props.name);
const errorMsg = ref<String>("");

watch(errorMessage, () => {
  if (errorMessage.value !== undefined) errorMsg.value = errorMessage.value;
});

const onChangeInput = (e: any) => {
  if (e.target.value > props.maxQuantity) value.value = props.maxQuantity;
};
const classes = computed(() => `${errorMessage.value ? "border-red-500" : ""}`);
</script>

<template>
  <div class="">
    <input
      type="number"
      class="border-blur-grey border-[1px] font-bold text-center py-[13px] px-[15px] mr-6 xs:mb-0 mb-[15px] outline-none"
      :class="classes"
      :min="0"
      :max="maxQuantity || ''"
      name="quantity"
      v-model="value"
      v-on:keyup="onChangeInput"
      @change="onChangeInput"
    />
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
const emit = defineEmits(["changeMsgQuantity"]);

watch(errorMessage, () => {
  if (errorMessage.value !== undefined)
    emit("changeMsgQuantity", errorMessage.value);
});

const onChangeInput = (e: any) => {
  if (e.target.value < 1) value.value = 1;
  else if (e.target.value > props.maxQuantity) value.value = props.maxQuantity;
};
const classes = computed(() => `${errorMessage.value ? "border-red-500" : ""}`);
</script>

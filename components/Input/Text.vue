<template>
  <div class="text-start">
    <input
      v-model="value"
      class="border-[#e3e5e9] border-[2px] w-full"
      :name="name"
      :type="type"
      :class="classes"
      :placeholder="placeholder"
      
    />
    <span class="mr-auto" :class="errorMessage && 'text-red-500'">{{
      errorMessage
    }}</span>
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
  placeholder: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "md",
  },
  widthFull:{
    type: Boolean,
    default : false
  }
});

const paddingClasses = computed(() => {
  switch (props.size) {
    case "xs":
      return "p-2";
    case "md":
      return "p-4";
    case "xl":
      return "px-[30px] py-[14px]";
    default:
      return "px-3 py-3";
  }
});

const { errorMessage, value } = useField(props.name);

const classes = computed(
  () => `${paddingClasses.value} ${props.widthFull && 'w-full'} ${errorMessage.value ? "border-red-500" : ""}`
);
</script>

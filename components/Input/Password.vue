<template>
  <div>
    <InputPassword
      v-model="value"
      class="w-full border-[#e3e5e9] border-[2px]"
      name="username"
      :type="props.type"
    />
    <span>{{ errorMessage }}</span>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import { useField } from "vee-validate";
import { InputPassword } from "ant-design-vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
});

console.log(props.name);

const { errorMessage, value} = useField(props.name);
</script>

<template>
  <div>
    <input
      type="number"
      class="border-blur-grey border-[1px] font-bold text-center py-[13px] px-[15px] mr-6 xs:mb-0 mb-[15px] outline-none"
      min="1"
      :max="maxQuantity"
      name="quantity"
      v-model="value"
      v-on:keyup="onChangeInput"
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
  maxQuantity:{
    type: Number,
    default:1
  }
});

const { value } = useField(props.name);


const onChangeInput = (e :any)=>{
  if(e.target.value > props.maxQuantity){
    value.value = props.maxQuantity
  }
  console.log(value.value)
}
</script>


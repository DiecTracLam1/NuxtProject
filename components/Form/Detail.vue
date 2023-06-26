<template>
  <Form
    @submit="onSubmit"
    :validation-schema="schema"
    :initial-values="formValues"
  >
    <!-- Size & Color -->
    <div
      class="flex justify-center items-baseline mb-[30px] sm:flex-row flex-col"
    >
      <div>
        <div class="flex sm:mr-[50px] items-center sm:mb-0 mb-[25px]">
          <span class="text-base">Size: </span>
          <ul class="flex items-center m-0 ml-[10px]">
            <li class="mr-[10px]">
              <InputSize name="size" size="XXL" value="XXL" />
            </li>

            <li class="mr-[10px]">
              <InputSize name="size" size="XL" value="XL" />
            </li>

            <li class="mr-[10px]">
              <InputSize name="size" size="M" value="M" />
            </li>

            <li class="mr-[10px]">
              <InputSize name="size" size="L" value="L" />
            </li>
          </ul>
        </div>
        <ErrorMessage class="block text-base text-red-500 mt-2" name="size" />
      </div>

      <div>
        <div class="flex items-center">
          <span class="leading-6 text-base">Color: </span>
          <ul class="flex items-center m-0 ml-[10px]">
            <li class="mr-[10px]">
              <InputColor name="color" value="red" />
            </li>

            <li class="mr-[10px]">
              <InputColor name="color" value="yellow" />
            </li>

            <li class="mr-[10px]">
              <InputColor name="color" value="green" />
            </li>

            <li class="mr-[10px]">
              <InputColor name="color" value="pink" />
            </li>
          </ul>
        </div>
        <ErrorMessage class="block text-base text-red-500 mt-2" name="color" />
      </div>
    </div>

    <!-- Amount  -->
    <div class="flex flex-col xs:flex-row justify-center items-center mb-10">
      <InputNumber name="quantity" />
      <Button type="submit" text="+ADD TO CART" size="xl" />
    </div>
  </Form>
</template>

<script setup lang="ts">
import { Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";


const emit = defineEmits(['submitForm'])

const schema = yup.object({
  color: yup.string().required("Please select a color"),
  size: yup.string().required("Please select a size"),
  quantity: yup.number().required(),
});

const formValues = {
  quantity: 1,
};

const onSubmit = (values: any) => {
  emit('submitForm',values)
};
</script>

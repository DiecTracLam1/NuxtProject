<template>
  <div class="p-6 text-center">
    <h1 class="text-2xl font-bold">Welcome to Male Fashion</h1>
    <p class="text-blur-grey text-base">Create an accout</p>
    <VeeFrom>
      <Field class="w-5 h-10" name="email" type="email" />
    </VeeFrom>
  </div>
</template>
<script lang="ts">
import { Form as VeeFrom, Field } from "vee-validate";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});

const onSubmit = (values) => {
  // Submit to API
  console.log(values); // { email: 'email@gmail.com' }
};
</script>

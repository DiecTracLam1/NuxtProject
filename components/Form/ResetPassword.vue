<template>
  <form @submit="onSubmit" class="pt-[30px]">
    <div class="flex items-baseline mb-7">
      <label class="text-blur-grey w-[20%] text-right" for=""
        >Current Password</label
      >
      <InputText
        name="password"
        type="password"
        class="flex-1 ml-5"
        size="xs"
      />
    </div>

    <div class="flex items-baseline mb-7">
      <label class="text-blur-grey w-[20%] text-right" for=""
        >New Password</label
      >
      <InputText
        name="newPassword"
        type="password"
        class="flex-1 ml-5"
        size="xs"
      />
    </div>

    <div class="flex items-baseline mb-7">
      <label class="text-blur-grey w-[20%] text-right" for=""
        >Repeat Password</label
      >
      <InputText
        name="repeatPassword"
        type="password"
        class="flex-1 ml-5"
        size="xs"
      />
    </div>

    <div class="flex items-center mb-7">
      <label class="w-[20%]" />
      <Button text="save" size="xs" class="ml-5" />
    </div>
  </form>
</template>
<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { useForm } from "vee-validate";
import * as yup from "yup";

// pinia user store
const store = useUserStore();

// event form
const schema = yup.object({
  password: yup.string().required("Password must be filled"),
  newPassword: yup.string().required("New Password must be filled"),
  repeatPassword: yup
    .string()
    .required("Repeat Password must be filled")
    .oneOf([yup.ref("newPassword")], "Your password was wrong"),
});

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit(async (values: any) => {
  console.log(values)
  await store.updatePassword(values);
});
</script>

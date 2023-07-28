<template>
  <a-spin :spinning="store.getLoading">
    <div class="p-6 text-center">
      <h1 class="text-2xl font-bold">Welcome to Male Fashion</h1>
      <p class="text-blur-grey text-base">Create account!</p>
      <form @submit="onSubmit">
        <InputText
          name="username"
          type="text"
          placeholder="Username"
          class="my-4"
          :widthFull="true"
        />
        <InputText
          name="phoneNumber"
          type="number"
          placeholder="Phone Number"
          class="my-4"
          :widthFull="true"
        />
        <InputText
          name="password"
          type="password"
          placeholder="Password"
          class="my-4"
          :widthFull="true"
        />
        <InputText
          name="repeatPassword"
          type="password"
          placeholder="Password"
          class="my-4"
          :widthFull="true"
        />
        <Button
          class="w-full"
          typpe="submit"
          text="Register"
          :disabled="isSubmitting"
        />
      </form>
      <div class="flex mt-4 text-base">
        <p class="text-blur-grey">Already have an account?</p>
        <span
          class="cursor-pointer ml-1 hover:text-blue-400"
          @click="onChangeModal"
        >
          Log in
        </span>
      </div>
    </div>
  </a-spin>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { message } from "ant-design-vue";
import { showError } from "nuxt/app";
import { useForm } from "vee-validate";
import * as yup from "yup";

const emit = defineEmits(["changeModal"]);

const onChangeModal = () => {
  emit("changeModal", "Login");
};
// pinia user store
const store = useUserStore();

// event form
const phoneRegExp = /(0|[3|5|7|8|9])+([0-9]{8})\b/g;
const schema = yup.object({
  username: yup.string().required("Username must be filled"),
  phoneNumber: yup
    .string()
    .required("Phone number must be filled")
    .matches(phoneRegExp, "Phone number is not valid"),
  password: yup.string().required("Password must be filled"),
  repeatPassword: yup
    .string()
    .required("Password must be filled")
    .oneOf([yup.ref("password")], "Your password was wrong"),
});

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit(async (values: any) => {
  const { username, password, repeatPassword, phoneNumber } = values;
  console.log(values);
  try {
    await store.registerUser(username, password, repeatPassword, phoneNumber);
    message.success("Register successfully");
  } catch (error: any) {
    message.error(error.message);
    return;
  }
});
</script>

<template>
  <a-spin :spinning="store.getLoading">
    <div class="p-6 text-center">
      <h1 class="text-2xl font-bold">Welcome to Male Fashion</h1>
      <p class="text-blur-grey text-base">Login to your account!</p>
      <form @submit="onSubmit">
        <InputText
          name="username"
          type="text"
          placeholder="Username"
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
        <Button
          class="w-full"
          typpe="submit"
          text="Login"
          :disabled="isSubmitting"
        />
        <div class="flex mt-4 text-base">
          <p class="text-blur-grey">Already have an account?</p>
          <span
            class="cursor-pointer ml-1 hover:text-blue-400"
            @click="onChangeModal"
          >
            Create an account
          </span>
        </div>
      </form>
    </div>
  </a-spin>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { message } from "ant-design-vue";
import { useForm } from "vee-validate";
import * as yup from "yup";

const emit = defineEmits(["changeModal"]);

const onChangeModal = () => {
  emit("changeModal", "Register");
};
// pinia user store
const store = useUserStore();

// event form
const schema = yup.object({
  username: yup.string().required("Username must be filled"),
  password: yup.string().required("Password must be filled"),
});

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit(async (values: any) => {
  const { username, password } = values;
  try {
    await store.loginUser(username, password);
    message.success("Login successfully");
  } catch (error: any) {
    message.error("Username or password is invalid");
    return;
  }
});
</script>

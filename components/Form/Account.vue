<template>
  <a-spin tip="Loading..." :spinning="store.getLoading">
    <form @submit="onSubmit" class="pt-[30px] w-full">
      <div class="grid grid-cols-12 gap-y-[50px] md:gap-x-7.5">
        <div class="col-span-12 order-1 md:col-span-8 md:order-none">
          <div>
            <div class="flex items-center mb-7">
              <label class="text-blur-grey w-[20%] text-right" for=""
                >Username</label
              >
              <InputText
                name="username"
                class="flex-1 ml-5"
                size="xs"
                :widthFull="true"
              />
            </div>

            <div class="flex items-center mb-7">
              <label class="text-blur-grey w-[20%] text-right" for=""
                >Fullname</label
              >
              <InputText
                name="fullname"
                class="flex-1 ml-5"
                size="xs"
                :widthFull="true"
              />
            </div>

            <div class="flex items-center mb-7">
              <label class="text-blur-grey w-[20%] text-right" for=""
                >Email</label
              >
              <InputText
                name="email"
                class="flex-1 ml-5"
                size="xs"
                :widthFull="true"
              />
            </div>

            <div class="flex items-center mb-7">
              <label class="text-blur-grey w-[20%] text-right" for=""
                >Sex</label
              >
              <InputRadio
                class="ml-5"
                name="sex"
                title="Male"
                v-model="user.user.sex"
              />
              <InputRadio class="ml-5" name="sex" title="Female" />
              <InputRadio class="ml-5" name="sex" title="Other" />
            </div>

            <div class="flex items-center mb-7">
              <label class="text-blur-grey w-[20%] text-right" for=""
                >Phone number</label
              >
              <InputText
                name="phoneNumber"
                class="flex-1 ml-5"
                size="xs"
                :widthFull="true"
              />
            </div>

            <div class="flex items-center mb-7">
              <label class="w-[20%]" />
              <Button text="save" size="xs" class="ml-5" />
            </div>
          </div>
        </div>
        <div class="col-span-12 md:col-span-4">
          <div class="flex flex-col items-center md:border-l-[1px]">
            <div class="h-[100px] my-5">
              <img
                class="w-full h-full rounded-full"
                :src="props.user.user.profileImage"
                alt=""
              />
            </div>
            <div class="my-5">
              <label
                for="image"
                class="border-[1px] cursor-pointer px-4 p-3 hover:bg-slate-50"
                >Choose image</label
              >
              <Field name="profileImage" v-slot="{ handleChange }">
                <input
                  type="file"
                  id="image"
                  hidden
                  @change="(e:any)=>handleChange(e.target.files[0].name)"
                />
              </Field>
            </div>
            <p class="m-0">File size: maximum 1 MB</p>
            <p class="m-0">File extension: .JPEG, .PNG</p>
          </div>
        </div>
      </div>
    </form>
  </a-spin>
</template>
<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { message } from "ant-design-vue";
import { useForm, Field } from "vee-validate";
import * as yup from "yup";
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});

// pinia user store
const store = useUserStore();

// event form
const schema = yup.object({
  username: yup.string().required("Username must be filled"),
  phoneNumber: yup.number().required("Phone number must be filled"),
});

const { handleSubmit } = useForm({
  initialValues: {
    ...props.user.user,
  },
  validationSchema: schema,
});

const onSubmit = handleSubmit(async (values: any) => {
  try {
    await store.updateUser(values);
    message.success("Update user successfully");
  } catch (error) {}
});
</script>

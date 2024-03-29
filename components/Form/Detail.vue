<template>
  <Form
    @submit="onSubmit"
    :validation-schema="schema"
    :initial-values="formValues"
  >
    <!-- Size -->
    <div
      class="flex justify-center items-baseline mb-[30px] sm:flex-row flex-col"
    >
      <div>
        <div class="flex sm:mr-[50px] items-center sm:mb-0 mb-[25px]">
          <span class="text-base">Size: </span>
          <ul class="flex items-center m-0 ml-[10px]">
            <li v-for="size in props.sizeList" class="mr-[10px]">
              <InputSize name="size" :size="size" :value="size" />
            </li>
          </ul>
        </div>
        <ErrorMessage class="block text-base text-red-500 mt-2" name="size" />
      </div>

      <!-- Color -->
      <div>
        <div class="flex items-center">
          <span class="leading-6 text-base">Color: </span>
          <ul class="flex items-center m-0 ml-[10px]">
            <li class="mr-[10px]" v-for="color in props.colorList">
              <InputColor name="color" :value="color" />
            </li>
          </ul>
        </div>
        <ErrorMessage class="block text-base text-red-500 mt-2" name="color" />
      </div>
    </div>

    <!-- Amount  -->
    <div>
      <div class="flex flex-col xs:flex-row justify-center items-baseline mb-2">
        <InputNumber
          @changeMsgQuantity="changeMsgQuantity"
          :maxQuantity="stock[0].quantity"
          name="quantity"
        />
        <Button type="submit" text="+ADD TO CART" size="xl" />
      </div>

      <p class="mr-auto" :class="errMsgQuantity && 'text-red-500'">
        {{ errMsgQuantity }}
      </p>

      <p class="text-blur-grey mb-10">
        {{ stock[0].quantity }} pieces available
      </p>
    </div>
  </Form>
</template>

<script setup lang="ts">
import { Form, ErrorMessage } from "vee-validate";
import { useUserStore } from "@/stores/user";
import * as yup from "yup";
import { message } from "ant-design-vue";
import { Stock } from "model/product";

const props = defineProps({
  sizeList: {
    type: Array as PropType<string[]>,
    default: [],
  },
  colorList: {
    type: Array as PropType<string[]>,
    default: [],
  },
  stock: {
    type: Object as PropType<Stock[]>,
    required: true,
  },
});
const userStore = useUserStore();
const emit = defineEmits(["submitForm"]);

const schema = yup.object({
  color: yup.string().required("Please select a color"),
  size: yup.string().required("Please select a size"),
  quantity: yup
    .number()
    .min(1, "Must be more than 1")
    .typeError("Must be more than 1")
    .required("Please ")
    .max(
      props.stock[0].quantity,
      "You have reached the maximum quantity available for this item"
    ),
});

const errMsgQuantity = ref("");
const changeMsgQuantity = (msg: string) => {
  errMsgQuantity.value = msg;
};

const formValues = {
  quantity: 1,
};

const onSubmit = (values: any) => {
  if (!userStore.$state.data.access_token) {
    message.error("Please login first");
    return;
  }
  emit("submitForm", values);
};
</script>

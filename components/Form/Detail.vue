<template>
  <!-- <form @submit="onSubmit"> -->
  <!-- Size & Color -->
  <div class="flex justify-center items-center mb-[30px] sm:flex-row flex-col">
    <div class="flex sm:mr-[50px] items-center sm:mb-0 mb-[25px]">
      <span class="text-base">Size: </span>
      <ul class="flex items-center m-0 ml-[10px]">
        <li class="mr-[10px]">
          <input
            class="hidden peer"
            type="radio"
            name="size"
            id="XXL"
            value="XXL"
          />
          <label
            class="border-blur-grey border-[1px] font-bold text-[15px] py-2 px-[17px] inline-block peer-checked:text-white peer-checked:bg-black hover:cursor-pointer"
            for="XXL"
            >XXL</label
          >
        </li>

        <li class="mr-[10px]">
          <input
            class="hidden peer"
            type="radio"
            name="size"
            id="XL"
            value="XL"
          />
          <label
            class="border-blur-grey border-[1px] font-bold text-[15px] py-2 px-[17px] inline-block peer-checked:text-white peer-checked:bg-black hover:cursor-pointer"
            for="XL"
            >XL</label
          >
        </li>

        <li class="mr-[10px]">
          <input
            class="hidden peer"
            type="radio"
            name="size"
            id="L"
            value="L"
          />
          <label
            class="border-blur-grey border-[1px] font-bold text-[15px] py-2 px-[17px] inline-block peer-checked:text-white peer-checked:bg-black hover:cursor-pointer"
            for="L"
            >L</label
          >
        </li>

        <li class="mr-[10px]">
          <input
            class="hidden peer"
            type="radio"
            name="size"
            id="M"
            value="M"
          />
          <label
            class="border-blur-grey border-[1px] font-bold text-[15px] py-2 px-[17px] inline-block peer-checked:text-white peer-checked:bg-black hover:cursor-pointer"
            for="M"
            >M</label
          >
        </li>
      </ul>
    </div>

    <div class="flex items-center">
      <span class="leading-6 text-base">Color: </span>
      <ul class="flex items-center m-0 ml-[10px]">
        <li class="mr-[10px]">
          <input class="hidden peer" type="radio" name="color" id="yellow" />
          <label
            class="inline-block w-[30px] h-[30px] p-[1px] rounded-full border-[#e3e1e8] border-[1px] peer-checked:scale-[1.2] peer-checked:border-black hover:cursor-pointer"
            for="yellow"
          >
            <span
              class="inline-block bg-yellow-500 w-full h-full rounded-full"
            />
          </label>
        </li>

        <li class="mr-[10px]">
          <input class="hidden peer" type="radio" name="color" id="yellow" />
          <label
            class="inline-block w-[30px] h-[30px] p-[1px] rounded-full border-[#e3e1e8] border-[1px] peer-checked:scale-[1.2] peer-checked:border-black hover:cursor-pointer"
            for="yellow"
          >
            <span
              class="inline-block bg-yellow-500 w-full h-full rounded-full"
            />
          </label>
        </li>

        <li class="mr-[10px]">
          <input class="hidden peer" type="radio" name="color" id="yellow" />
          <label
            class="inline-block w-[30px] h-[30px] p-[1px] rounded-full border-[#e3e1e8] border-[1px] peer-checked:scale-[1.2] peer-checked:border-black hover:cursor-pointer"
            for="yellow"
          >
            <span
              class="inline-block bg-yellow-500 w-full h-full rounded-full"
            />
          </label>
        </li>

        <li class="mr-[10px]">
          <input class="hidden peer" type="radio" name="color" id="yellow" />
          <label
            class="inline-block w-[30px] h-[30px] p-[1px] rounded-full border-[#e3e1e8] border-[1px] peer-checked:scale-[1.2] peer-checked:border-black hover:cursor-pointer"
            for="yellow"
          >
            <span
              class="text- inline-block bg-yellow-500 w-full h-full rounded-full"
            />
          </label>
        </li>
      </ul>
    </div>
  </div>

  <!-- Amount  -->
  <div class="flex flex-col xs:flex-row justify-center items-center mb-10">
    <form @submit="onSubmit">
      <input
        type="number"
        class="border-blur-grey border-[1px] font-bold text-center py-[13px] px-[15px] mr-6 xs:mb-0 mb-[15px] outline-none"
        min="1"
        max="20"
        name="quantity"
        v-model="quantity"
      />
      <Button type="submit" text="+ADD TO CART" size="xl" />
    </form>
  </div>
  <!-- </form> -->
</template>
<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";

const quantity = ref(1);
const schema = yup.object({
  //   username: yup.string().required("Username must be filled"),
  //   password: yup.string().required("Password must be filled"),
  // size : yup.string().required("das"),
  quantity: yup.number(),
});
const { handleSubmit } = useForm({
  validationSchema: schema,
});
const onSubmit = handleSubmit((values: any) => {
  console.log(values);
});
</script>

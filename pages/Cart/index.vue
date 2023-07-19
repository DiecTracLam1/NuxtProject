<template>
  <div
    class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1170px] xl:max-w-[1170px] w-full px-[15px] mx-auto mt-24"
  >
    <div class="grid grid-cols-12 md:gap-[30px] gap-y-[30px]">
      <div class="col-span-12 md:col-span-8">
        <a-table
          :pagination="false"
          :columns="columns"
          :data-source="data"
          :scroll="{ y: 650 }"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'product'">
              <div class="flex sm:items-center sm:flex-row flex-col">
                <div class="h-[90px] w-[90px]">
                  <img class="w-full h-full" :src="record.image" alt="" />
                </div>
                <div class="flex-1 sm:ml-[30px]">
                  <a-typography-paragraph
                    class="text-lg"
                    :ellipsis="{ rows: 2 }"
                    :content="record.name"
                  />
                  <!-- <p class="m-0 text-lg">{{ record.name }}</p> -->
                  <div class="flex my-1 text-blur-grey text-sm">
                    <span>Size:{{ record.size }}</span>

                    <span class="ml-3">Color:{{ record.color }}</span>
                  </div>
                  <div class="flex items-center font-bold text-lg">
                    <Icon
                      name="ph:currency-dollar-simple-bold"
                      color="black"
                      class="w-fit leading"
                    />
                    <p class="m-0 mt-[2px]">{{ record.salePrice }}</p>
                  </div>
                </div>
              </div>
            </template>

            <template v-else-if="column.key === 'quantity'">
              <a-input-number
                id="inputNumber"
                @change="(e:any) => onChangeQuantity(e, record)"
                v-model:value="record.quantity"
                :min="1"
                :max="record.stock[0].quantity"
              />
              <!-- <input
                class="w-16 text-center border-black border-[1px]"
                type="number"
                :value="record.quantity"
              /> -->
            </template>

            <template v-else-if="column.key === 'total'">
              <div class="flex items-center font-bold text-lg">
                <Icon
                  name="ph:currency-dollar-simple-bold"
                  color="black"
                  class="leading"
                />
                <p class="m-0 mt-[2px]">{{ record.total }}</p>
              </div>
            </template>

            <template v-else>
              <Icon
                class="box-content p-2 bg-[#F3F2EE] text-2xl rounded-full cursor-pointer"
                name="typcn:times"
                color="black"
                @click="removeCart(record)"
              />
            </template>
          </template>
        </a-table>
      </div>
      <div class="col-span-12 md:col-span-4">
        <h3 class="font-bold text-base mb-[35px]">DISCOUNT CODES</h3>
        <div class="flex mb-[60px]">
          <input
            class="flex-1 border-blur-grey border-[2px] pl-5 py-3 pr-2 outline-none w-full"
            placeholder="Coupon code"
            type="text"
          />
          <Button text="APPLY" size="xl" />
        </div>
        <div class="bg-[#F3F2EE] p-10">
          <h2 class="text-base mb-3">CART TOTAL</h2>
          <div class="flex items-center">
            <p class="text-base mb-0">Subtotal</p>
            <div class="flex items-center font-bold leading-10 text-lg ml-auto">
              <Icon
                name="ph:currency-dollar-simple-bold"
                color="#e53638"
                class="w-fit leading"
              />
              <p class="m-0 mt-[2px] text-[#e53638]">
                {{ cartStore.totalPrice }}
              </p>
            </div>
          </div>
          <div class="flex items-center">
            <p class="text-base mb-0">Total</p>
            <div class="flex items-center font-bold leading-10 text-lg ml-auto">
              <Icon
                name="ph:currency-dollar-simple-bold"
                color="#e53638"
                class="w-fit leading"
              />
              <p class="m-0 mt-[2px] text-[#e53638]">
                {{ cartStore.totalPrice }}
              </p>
            </div>
          </div>
          <Button
            @click="onSubmitCart"
            class="mt-6 w-full text-center"
            text="PROCEED TO ORDER"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
import { useUserStore } from "~/stores/user";
import { message } from "ant-design-vue";

// pinia cart store
const cartStore = useCartStore();
const userStore = useUserStore();

const columns = [
  {
    title: "PRODUCT",
    dataIndex: "product",
    key: "product",
    width: "xs:w-fit",
  },
  {
    title: "QUANTITY",
    dataIndex: "quantity",
    key: "quantity",
    width: "20%",
  },
  {
    title: "TOTAL",
    dataIndex: "total",
    key: "total",
    width: "20%",
  },
  {
    title: "",
    dataIndex: "Delete",
    key: "Delete",
    width: "10%",
  },
];

console.log(cartStore.cart);

const data = computed(() => {
  return cartStore.cart.map((item) => {
    return {
      ...item,
      key: item.id,
      thumbnail: item.image[0],
      total: Math.round(item.quantity * item.salePrice * 100) / 100,
    };
  });
});

function removeCart(product: any) {
  cartStore.removeItemFromCart(product);
}

function onChangeQuantity(value: number, product: any) {
  cartStore.setQuantity(value, product);
}

async function onSubmitCart() {
  if (!userStore.$state.data.access_token) {
    message.error("Please login first");
    return;
  }

  if (cartStore.$state.cart.length <= 0) {
    message.error("There are no products to order");
    return;
  }

  const totalPrice = data.value.reduce(
    (initial, nextItem) => initial + nextItem.total,
    0
  );
  const userId = userStore.data.user?.id;
  const product = data.value;
  try {
    await cartStore.submitToApi({ totalPrice, userId, product });
    message.success("Order successfully");
    navigateTo({
      path: "/user/order",
    });
    cartStore.$reset()
  } catch (error) {
    message.error("Something went wrong");
  }
}
</script>

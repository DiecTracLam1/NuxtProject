<template>
  <div class="bg-[#F3F2EE] h-[140px] mb-3">
    <div
      class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] px-[15px] mx-auto h-full"
    >
      <div class="flex flex-col justify-center h-full">
        <h4 class="text-2xl font-bold mb-2">Order</h4>
      </div>
    </div>
  </div>
  <a-spin tip="Loading..." :spinning="spinning">
    <div
      class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] w-full mx-auto h-full"
    >
      <div class="px-[15px] pt-5 pb-[50px]">
        <div class="pt-3 mb-3">
          <a-tabs v-model:activeKey="activeKey" centered @change="changeTabs">
            <a-tab-pane key="1">
              <template #tab>
                <span class="text-base p-4"> All </span>
              </template>
            </a-tab-pane>
            <a-tab-pane key="2" force-render>
              <template #tab>
                <span class="text-base p-4"> To Confirm </span>
              </template>
            </a-tab-pane>
            <a-tab-pane key="3"
              ><template #tab>
                <span class="text-base p-4"> To Receive </span>
              </template>
            </a-tab-pane>
            <a-tab-pane key="4"
              ><template #tab>
                <span class="text-base p-4"> Completed </span>
              </template>
            </a-tab-pane>
            <a-tab-pane key="5"
              ><template #tab>
                <span class="text-base p-4"> Cancelled </span>
              </template>
            </a-tab-pane>
          </a-tabs>
        </div>

        <ul v-if="orders?.data.length || 0 > 0" class="flex flex-col">
          <li
            v-for="order in orders?.data"
            class="border-[1px] my-3 shadow-lg p-6"
          >
            <div>
              <div class="border-b-[1px] pb-3 text-end">
                <div v-if="order.status === '5'" class="text-red-500">
                  <Icon
                    class="text-lg"
                    name="pepicons-pop:times-circle-filled"
                  />
                  Cancled
                </div>
                <div v-else class="text-[#26aa99]">
                  <Icon name="mdi:truck-outline" class="text-lg" />
                  {{ statusList[Number(order.status) - 1] }}
                </div>
              </div>
              <div
                v-for="product in order.product"
                class="flex xs:flex-row flex-col xs:items-center border-y-[1px] mt-[10px] py-3"
              >
                <div class="flex flex-1 pr-3">
                  <div class="w-[78px] h-[78px]">
                    <img
                      class="w-full h-full"
                      :src="product.thumbnail"
                      alt=""
                    />
                  </div>
                  <div class="flex flex-1 flex-col pl-3">
                    <a-typography-paragraph
                      :ellipsis="{ rows: 2 }"
                      :content="product.name"
                      class="text-base"
                    />
                    <p class="text-blur-grey">Variation: xanh - 39</p>
                    <span>x{{ product.quantity }}</span>
                  </div>
                </div>
                <div class="flex justify-self-end text-lg xs:pl-0 pl-[90px]">
                  <span class="text-blur-grey line-through mr-3 my-0"
                    >${{ product.price }}</span
                  >
                  <span class="text-[#ee4d2d] my-0"
                    >${{ product.salePrice }}</span
                  >
                </div>
              </div>
              <div class="py-3 text-right">
                <span class="text-sm">Order total : </span>
                <span class="text-[#ee4d2d] text-2xl"
                  >${{ order.totalPrice }}</span
                >
              </div>
              <div class="flex pt-3">
                <p v-if="order.cancelMsg" class="text-base text-red-400">
                  Reason : {{ order.cancelMsg }}
                </p>
                <Button
                  v-if="order.status === '1' || order.status === '2'"
                  @click="onChangeVisible"
                  class="ml-auto normal-case tracking-normal"
                  text="Cancel Order"
                />

                <Button
                  v-if="order.status === '4' || order.status === '5'"
                  @click="onClickBuyAgain(order.product)"
                  class="ml-auto normal-case tracking-normal"
                  text="Buy again"
                />
              </div>

              <!-- Modal -->
              <a-modal
                v-model:visible="visible"
                :title="`Select Cancellation Reason`"
                centered
                :confirm-loading="spinning"
                okText="Cancel Order"
                @ok="cancelProduct(order.id)"
              >
                <div>
                  <div
                    class="flex bg-[#f7f4ec] items-center py-1 px-2 border-[1px] border-yellow-300 mb-3"
                  >
                    <Icon
                      name="ic:baseline-error-outline"
                      class="text-yellow-500 text-[40px]"
                    />
                    <p class="m-0 ml-2">
                      Please select a cancellation reason. Please take note that
                      this will cancel all items in the order and the action
                      cannot be undone.
                    </p>
                  </div>
                  <div class="flex my-3">
                    <input
                      type="radio"
                      name="errorMessg"
                      value="Need to change delivery address"
                      @click="changeCancelMsg"
                    />
                    <li class="ml-2 text-base">
                      Need to change delivery address
                    </li>
                  </div>
                  <div class="flex my-3">
                    <input
                      type="radio"
                      name="errorMessg"
                      value="Don't want to buy anymore"
                      @click="changeCancelMsg"
                    />
                    <li class="ml-2 text-base">Don't want to buy anymore</li>
                  </div>
                  <div class="flex my-3">
                    <input
                      type="radio"
                      name="errorMessg"
                      value="Others"
                      @click="changeCancelMsg"
                    />
                    <li class="ml-2 text-base">Others</li>
                  </div>
                  <p class="text-red-500">{{ errorMsg }}</p>
                </div>
              </a-modal>
            </div>
          </li>
        </ul>

        <template v-else>
          <a-empty />
        </template>
      </div>
    </div>
  </a-spin>
</template>

<script setup lang="ts">
import { OrderApi } from "model/order";
import { Product } from "model/product";
import { useCartStore } from "@/stores/cart";
import { useUserStore } from "@/stores/user";

definePageMeta({
  middleware: "auth",
});

const { $pinia } = useNuxtApp();
const cartStore = useCartStore();
const userStore = useUserStore($pinia);

const router = useRouter();
const query = ref(router.currentRoute.value.query);
const activeKey = ref(query.value?.status ?? "1");
const statusList = [
  "",
  "Waiting for comfirm",
  "Waiting for the goods",
  "Success",
];
const spinning = ref<boolean>(false);
const visible = ref(false);
const pickedCancelMsg = ref("");
const errorMsg = ref("");

const changeTabs = (key: string) => {
  activeKey.value = key;
};

const onChangeVisible = () => {
  visible.value = true;
};

const onClickBuyAgain = (productList: Product[]) => {
  productList.forEach((product) => {
    cartStore.addToCart(product, product.quantity, product.size, product.color);
  });
  navigateTo({
    path: "/cart",
  });
};

const changeCancelMsg = (e: any) => {
  errorMsg.value = "";
  pickedCancelMsg.value = e.target.value;
};

const cancelProduct = async (orderId: string) => {
  if (!pickedCancelMsg.value) {
    errorMsg.value = "Please selection cancellation reason";
    return;
  }
  spinning.value = true;
  await $fetch("/api/order", {
    method: "PUT",
    body: {
      orderId,
      status: "5",
      message: pickedCancelMsg.value,
    },
  });
  activeKey.value = "5";
  pickedCancelMsg.value = "";
  spinning.value = false;
  visible.value = false;
};

watch(activeKey, () => {
  router.push({ query: { status: activeKey.value } });
});

const { data: orders } = await useFetch<OrderApi>(
  () => {
    console.log(userStore.$state.data);
    console.log("$pinia: ", $pinia.state.value.User);
    return `/api/order?status=${activeKey.value}`;
  },
  {
    headers: { Authorization: `Bearer ${userStore.$state.data.access_token}` },
  }
);
// console.log(orders);
</script>

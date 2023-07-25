<template>
  <a-spin tip="Loading..." :spinning="pending">
    <div class="pb-[50px]">
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
          <div class="border-b-[1px] pb-3 text-end">
            <div v-if="order.status === '5'" class="text-red-500">
              <Icon class="text-lg" name="pepicons-pop:times-circle-filled" />
              Cancled
            </div>
            <div v-else class="text-[#26aa99]">
              <Icon name="mdi:truck-outline" class="text-lg" />
              {{ statusList[Number(order.status) - 1] }}
            </div>
          </div>
          
          <div
            v-for="product in order.productList"
            class="flex xs:flex-row flex-col xs:items-center border-y-[1px] mt-[10px] py-3"
          >
            <div class="flex flex-1 pr-3">
              <div class="w-[78px] h-[78px]">
                <img
                  class="w-full h-full"
                  :src="product.product.image[0]"
                  alt=""
                />
              </div>
              <div class="flex flex-1 flex-col pl-3">
                <a-typography-paragraph
                  :ellipsis="{ rows: 2 }"
                  :content="product.product.name"
                  class="text-base"
                />
                <p class="text-blur-grey">
                  Variation: {{ product.color }} - {{ product.size }}
                </p>
                <span>x{{ product.quantity }}</span>
              </div>
            </div>
            <div class="flex justify-self-end text-lg xs:pl-0 pl-[90px]">
              <span class="text-blur-grey line-through mr-3 my-0"
                >${{ product.product.price }}</span
              >
              <span class="text-[#ee4d2d] my-0"
                >${{ product.product.salePrice }}</span
              >
            </div>
          </div>

          <div class="py-3 text-right">
            <span class="text-sm">Order total : </span>
            <span class="text-[#ee4d2d] text-2xl">${{ order.totalPrice }}</span>
          </div>

          <div class="flex pt-3">
            <p v-if="order.cancelMsg" class="text-base text-red-400">
              Reason : {{ order.cancelMsg }}
            </p>
            <Button
              v-if="order.status === '1' || order.status === '2'"
              @click="onChangeVisible(order.id)"
              class="ml-auto normal-case tracking-normal"
              text="Cancel Order"
            />

            <Button
              v-if="order.status === '4' || order.status === '5'"
              @click="onClickBuyAgain(order.productList)"
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
            @ok="cancelProduct"
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
                  this will cancel all items in the order and the action cannot
                  be undone.
                </p>
              </div>
              <div class="flex my-3">
                <input
                  type="radio"
                  name="errorMessg"
                  value="Need to change delivery address"
                  @click="changeCancelMsg"
                />
                <li class="ml-2 text-base">Need to change delivery address</li>
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
        </li>
      </ul>

      <template v-else>
        <a-empty />
      </template>
    </div>
  </a-spin>
</template>

<script setup lang="ts">
import { OrderApi, ProductOrder } from "model/order";
import { useCartStore } from "@/stores/cart";
import { useUserStore } from "@/stores/user";

definePageMeta({
  layout: "custom",
});

const cartStore = useCartStore();

const router = useRouter();
const cookie = useCookie<any>("User");
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
const removeId = ref("");
const pickedCancelMsg = ref("");
const errorMsg = ref("");

const changeTabs = (key: string) => {
  activeKey.value = key;
};

const onChangeVisible = (id: string) => {
  removeId.value = id;
  visible.value = true;
};

const onClickBuyAgain = (productList: ProductOrder[]) => {
  productList.forEach((product) => {
    cartStore.addToCart(
      product.product,
      product.quantity,
      product.size,
      product.color
    );
  });
  navigateTo({
    path: "/cart",
  });
};

const changeCancelMsg = (e: any) => {
  errorMsg.value = "";
  pickedCancelMsg.value = e.target.value;
};

const cancelProduct = async () => {
  if (!pickedCancelMsg.value) {
    errorMsg.value = "Please selection cancellation reason";
    return;
  }
  spinning.value = true;
  await $fetch("/api/order", {
    method: "PUT",
    body: {
      orderId: removeId.value,
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

const { data: orders, pending } = await useFetch<OrderApi>(
  () => {
    return `/api/order?status=${activeKey.value}`;
  },
  {
    headers: { Authorization: `Bearer ${cookie.value.data.access_token}` },
  }
);
</script>

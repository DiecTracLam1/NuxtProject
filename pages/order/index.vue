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
  <div
    class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] px-[15px] w-full mx-auto h-full"
  >
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

    <div class="">
      <ul class="flex flex-col">
        <li
          v-for="order in orders?.data"
          class="border-[1px] my-3 shadow-lg p-6"
        >
          <div>
            <div class="border-b-[1px] pb-3 text-end text-[#26aa99]">
              <Icon name="mdi:truck-outline" class="text-lg" />
              Waiting for the goods
            </div>
            <div
              v-for="product in order.product"
              class="flex xs:flex-row flex-col xs:items-center border-y-[1px] mt-[10px] py-3"
            >
              <div class="flex flex-1 pr-3">
                <div class="w-[78px] h-[78px]">
                  <img class="w-full h-full" :src="product.image" alt="" />
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
            <div class="pt-3 text-right">
              <Button @click="cancelProduct(order.id)" class="normal-case tracking-normal" text="Cancel Order" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const activeKey = ref("1");

const changeTabs = (key: string) => {
  activeKey.value = key;
};

const cancelProduct = (orderId : string)=>{
  
}

const { data: orders } = await useFetch(
  () => `/api/order?status=${activeKey.value}`
);
console.log(orders);
</script>

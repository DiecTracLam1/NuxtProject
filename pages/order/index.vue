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
      <a-tabs v-model:activeKey="activeKey" centered class="flex">
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
        <li v-for="order , index in orders?.data" class="border-[1px] my-3 shadow-lg p-6">
          <div>
            <div class="border-b-[1px] pb-3 text-end text-[#26aa99]">
              <Icon name="mdi:truck-outline" class="text-lg" />
              Waiting for the goods
            </div>
            <div
              class="flex xs:flex-row flex-col xs:items-center border-y-[1px] mt-[10px] py-3"
            >
              <div class="flex flex-1 pr-3">
                <div class="w-[78px] h-[78px]">
                  <img
                    class="w-full h-full"
                    :src="order.product[index].image[0] "
                    alt=""
                  />
                </div>
                <div class="flex flex-1 flex-col pl-3">
                  <a-typography-paragraph
                    :ellipsis="{ rows: 2 }"
                    :content="order.product[index].name "
                    class="text-base"
                  ></a-typography-paragraph>
                  <p class="text-blur-grey">Phân loại hàng: xanh - 39</p>
                  <span>x1</span>
                </div>
              </div>
              <div class="flex justify-self-end text-lg xs:pl-0 pl-[90px]">
                <span class="text-blur-grey line-through mr-3 my-0"
                  >${{ order.product[index].price }}</span
                >
                <span class="text-[#ee4d2d] my-0">${{ order.product[index].salePrice }}</span>
              </div>
            </div>
            <div class="py-3 text-right">
              <span class="text-sm">Order total : </span>
              <span class="text-[#ee4d2d] text-2xl">${{ order.totalPrice }}</span>
            </div>
            <div class="pt-3 text-right">
              <Button class="tracking-normal" text="Buy again" />
            </div>
          </div>
        </li>

        <li class="border-[1px] my-3 shadow-lg p-6">
          <div>
            <div class="border-b-[1px] pb-3 text-end text-[#26aa99]">
              <Icon name="mdi:truck-outline" class="text-lg" />
              Waiting for the goods
            </div>
            <div
              class="flex xs:flex-row flex-col xs:items-center border-y-[1px] mt-[10px] py-3"
            >
              <div class="flex flex-1 pr-3">
                <div class="w-[78px] h-[78px]">
                  <img
                    class="w-full h-full"
                    src="https://preview.colorlib.com/theme/malefashion/img/shopping-cart/cart-1.jpg.webp"
                    alt=""
                  />
                </div>
                <div class="flex flex-1 flex-col pl-3">
                  <a-typography-paragraph
                    :ellipsis="{ rows: 2 }"
                    content="Giày Thể Thao Nam MWC NATT- 5444 Giày Thể Thao Nam Cao Cấp, Sneaker Nam Cổ Thấp Năng Động Cá Tính"
                    class="text-base"
                  ></a-typography-paragraph>
                  <p class="text-blur-grey">Phân loại hàng: xanh - 39</p>
                  <span>x1</span>
                </div>
              </div>
              <div class="flex justify-self-end text-lg xs:pl-0 pl-[90px]">
                <span class="text-blur-grey line-through mr-3 my-0"
                  >$25.00</span
                >
                <span class="text-[#ee4d2d] my-0">$20.00</span>
              </div>
            </div>
            <div class="py-3 text-right">
              <span class="text-sm">Order total : </span>
              <span class="text-[#ee4d2d] text-2xl">$256.00</span>
            </div>
            <div class="pt-3 text-right">
              <Button class="tracking-normal" text="Buy again" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const activeKey = ref("1");

const { data: orders } = await useFetch(`/api/order`);
console.log(orders)
</script>

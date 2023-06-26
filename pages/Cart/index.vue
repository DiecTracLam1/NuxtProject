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
                <div class="h-[90px]">
                  <img class="w-[90px] h-[90px]" :src="record.image" alt="" />
                </div>
                <div class="sm:ml-[30px]">
                  <p class="m-0 text-lg">{{ record.name }}</p>
                  <div class="flex my-1 text-blur-grey text-sm">
                    <span>Size:XL</span>
                    <span class="ml-3">Color:Blue</span>
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
              <input @change="(e)=>onChangeQuantity(e,record)" class="w-16 text-center border-black border-[1px] " type="number" :value="record.quantity">
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
                @click="removeCart(record?.id)"
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
              <p class="m-0 mt-[2px] text-[#e53638]">169.00</p>
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
              <p class="m-0 mt-[2px] text-[#e53638]">169.00</p>
            </div>
          </div>
          <Button class="mt-6 w-full text-center" text="PROCEED TO ORDER" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/cart";

// pinia cart store
const store = useCartStore();
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

const data = computed(() => {
  return store.cart.map((item) => {
    return {
      ...item,
      key: item.id,
      image: item.image[0],
      total: item.quantity * item.salePrice,
    };
  });
});

function removeCart(id: string) {
  store.removeItemFromCart(id);
}

function onChangeQuantity(e :any , product:any){
  store.setQuantity(Number(e.target.value), product)
}
</script>

<template>
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
            <img class="w-full h-full" :src="record.thumbnail" alt="" />
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
</template>
<script setup lang="ts">
import { useCartStore } from "@/stores/cart";

defineProps({
  data: {
    type: Array,
    required: true,
  },
});

const cartStore = useCartStore();

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

function onChangeQuantity(value: number, product: any) {
  cartStore.setQuantity(value, product);
}

function removeCart(product: any) {
  cartStore.removeItemFromCart(product);
}
</script>

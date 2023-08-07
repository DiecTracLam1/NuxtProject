<template>
  <div class="flex border-[#e3e1e8] border-2 px-3 py-2 mb-11">
    <input
      class="flex-1 text-normal text-blur-grey outline-none"
      type="text"
      placeholder="Search..."
      v-model="search"
    />
    <button @click="onClickSearch" class="pl-2 text-blur-grey">
      <Icon name="heroicons-outline:magnifying-glass" />
    </button>
  </div>

  <a-collapse v-model:activeKey="activeKey" expand-icon-position="right" ghost>
    <a-collapse-panel key="1" header="CATEGORIES" class="font-bold">
      <div class="border-b-[1px] border-[#e3e1e8] pb-2">
        <div class="flex my-2 text-blur-grey" v-for="item in listCategory">
          <span
            @click="onClickAcollapse(item.text, 'category')"
            class="hover:cursor-pointer hover:text-blue-400"
            :class="
              queryState?.category?.includes(item.text) && 'text-blue-400'
            "
            >{{ item.text }}</span
          >
          <span
            v-if="queryState?.category?.includes(item.text)"
            class="ml-auto mr-4 hover:cursor-pointer hover:text-blue-400"
            @click="onCloseTag('category')"
            ><Icon name="typcn:times"
          /></span>
        </div>
      </div>
    </a-collapse-panel>

    <a-collapse-panel key="2" header="BRANDING" class="font-bold">
      <div class="border-b-[1px] border-[#e3e1e8] pb-2">
        <div class="flex my-2 text-blur-grey" v-for="item in brands?.data">
          <span
            @click="onClickAcollapse(item?.name, 'brand')"
            class="hover:cursor-pointer hover:text-blue-400"
            :class="queryState?.brand?.includes(item.name) && 'text-blue-400'"
            >{{ item.name }}</span
          >
          <span
            v-if="queryState?.brand?.includes(item.name)"
            class="ml-auto mr-4 hover:cursor-pointer hover:text-blue-400"
            @click="onCloseTag('brand')"
            ><Icon name="typcn:times"
          /></span>
        </div>
      </div>
    </a-collapse-panel>

    <a-collapse-panel key="3" header="FILTER PRICE" class="font-bold">
      <div class="border-b-[1px] border-[#e3e1e8] pb-2 w-full">
        <Slider
          v-model="rangeValue"
          :format="format"
          :max="1000"
          @change="changeRange"
        />
        <Button
          size="xs"
          text="Apply"
          class="mt-3 ml-auto"
          @click="onButtonRange"
        />
      </div>
    </a-collapse-panel>

    <a-collapse-panel key="4" header="SIZE" class="font-bold">
      <div class="border-b-[1px] border-[#e3e1e8] pb-2">
        <ul class="flex flex-wrap items-center m-0">
          <li
            v-for="size in SizeList"
            @click="onClickAcollapse(size, 'size')"
            class="mr-[10px] mb-3"
          >
            <InputSize
              name="size"
              :size="size"
              :value="size"
              :isChecked="queryState?.size === size"
            />
          </li>
        </ul>
      </div>
    </a-collapse-panel>

    <a-collapse-panel key="5" header="COLORS" class="font-bold">
      <div class="border-b-[1px] border-[#e3e1e8] pb-2">
        <ul class="flex flex-wrap">
          <li
            class="my-2 mr-1 text-blur-grey hover:cursor-pointer"
            v-for="item in ColorList"
            @click="onClickAcollapse(item, 'color')"
          >
            <InputColor name="color" :value="item" />
          </li>
        </ul>
      </div>
    </a-collapse-panel>

    <a-collapse-panel
      key="6"
      header="TAGS"
      class="font-bold"
      :show-arrow="false"
    >
      <div class="flex flex-wrap">
        <template v-for="tag in tagList">
          <Tags
            v-if="cateList.includes(tag[0])"
            :name="tag[0]"
            :title="tag[1]"
            @closeTag="onCloseTag"
          />
        </template>
      </div>
    </a-collapse-panel>
  </a-collapse>
</template>

<script setup lang="ts">
import Slider from "@vueform/slider";
import "@vueform/slider/themes/default.css";
import { Brands } from "@/model/brands";
const { queryState, setQuery, removeQuery } = useRouteState();

const router = useRouter();
const tagList = ref<unknown>(Object.entries(queryState.value));
const listCategory = ref([{ text: "Men" }, { text: "Women" }]);
const activeKey = ref(["1", "6"]);

// Search
const search = ref(queryState.value?.search);
const onClickSearch = () => {
  if (search.value) setQuery({ search: search });
};

// Range Price
const rangeValue = computed(() => {
  let rangeList = queryState.value?.price?.split("-");
  if (rangeList) {
    for (const range of rangeList) {
      if (isNaN(range)) {
        return [0, 1000];
      }
    }
  }
  return rangeList ?? [0, 1000];
});


const format = { prefix: "$", decimals: 2 };

const changeRange = (value: any) => {
  rangeValue.value[0] = value[0];
  rangeValue.value[1] = value[1];
};
const onButtonRange = () => {
  setQuery({ price: `${rangeValue.value[0]}-${rangeValue.value[1]}` });
};

// Event select item in category
const onClickAcollapse = (value: any, key: string) => {
  setQuery({ [key]: value, _offset: 0, page: 1 });
};

watch(queryState, () => {
  tagList.value = Object.entries(queryState.value);
  router.push({
    query: queryState.value,
  });
});

const onCloseTag = (key: string) => {
  removeQuery(key);
  router.replace({ query: queryState.value });
};

// call Api brand
const { data: brands } = await useFetch<Brands>("/api/brand");

const ColorList = ref([
  "black",
  "blue",
  "yellow",
  "gray",
  "green",
  "pink",
  "white",
  "red",
]);

const SizeList = ref(["XXL", "XL", "M", "L", "S", "XS"]);

const cateList = ref(["category", "brand", "price", "search", "size", "color"]);
</script>

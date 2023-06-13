<template>
  <div>
    <div class="bg-[#F3F2EE] h-[140px]">
      <div class="xl:max-w-[1170px] px-[15px] mx-auto h-full">
        <div class="flex flex-col justify-center h-full">
          <h4 class="text-2xl font-bold mb-2">Shop</h4>
        </div>
      </div>
    </div>

    <div class="xl:max-w-[1170px] px-[15px] mx-auto pt-[100px]">
      <div class="grid grid-cols-12 gap-[50px]">
        <div class="col-span-3">
          <form class="flex border-[#e3e1e8] border-2 px-3 py-2 mb-11">
            <input
              class="flex-1 text-[15px] text-blur-grey outline-none"
              type="text"
              placeholder="Search..."
            />
            <button class="pl-2 text-blur-grey">
              <Icon name="heroicons-outline:magnifying-glass" />
            </button>
          </form>

          <a-collapse
            v-model:activeKey="activeKey"
            expand-icon-position="right"
            ghost
          >
            <a-collapse-panel key="1" header="CATEGORIES" class="font-bold">
              <div class="border-b-[1px] border-[#e3e1e8] pb-2">
                <div
                  class="my-2 text-blur-grey hover:cursor-pointer hover:text-blue-400"
                  v-for="item in list"
                >
                  {{ item.text }} {{ `(${item.amount})` }}
                </div>
              </div>
            </a-collapse-panel>

            <a-collapse-panel key="2" header="BRANDING" class="font-bold">
              <div class="border-b-[1px] border-[#e3e1e8] pb-2">
                <div
                  class="my-2 text-blur-grey hover:cursor-pointer hover:text-blue-400"
                  v-for="item in list"
                >
                  {{ item.text }}
                </div>
              </div>
            </a-collapse-panel>

            <a-collapse-panel key="3" header="FILTER PRICE" class="font-bold">
              <div class="border-b-[1px] border-[#e3e1e8] pb-2">
                <div
                  class="my-2 text-blur-grey hover:cursor-pointer hover:text-blue-400"
                  v-for="item in list"
                >
                  {{ item.text }}
                </div>
              </div>
            </a-collapse-panel>

            <a-collapse-panel key="4" header="SIZE" class="font-bold">
              <div class="border-b-[1px] border-[#e3e1e8] pb-2">
                <div
                  class="my-2 text-blur-grey hover:cursor-pointer hover:text-blue-400"
                  v-for="item in list"
                >
                  {{ item.text }}
                </div>
              </div>
            </a-collapse-panel>

            <a-collapse-panel key="5" header="COLORS" class="font-bold">
              <div class="border-b-[1px] border-[#e3e1e8] pb-2">
                <!-- <div
                  class="my-2 text-blur-grey hover:cursor-pointer"
                  v-for="item in list"
                > -->
                <div
                  class="mb-2 mr-2 w-[30px] h-[30px] p-[1px] rounded-full border-[#e3e1e8] border-[1px]"
                >
                  <span
                    class="inline-block bg-yellow-500 w-full h-full rounded-full"
                  />
                </div>

                <!-- </div> -->
              </div>
            </a-collapse-panel>
          </a-collapse>
        </div>
        <div class="col-span-9">
          <div class="flex mb-11">
            <p>Showing 1-12 of 126 results</p>
            <p class="items-end">asdasd</p>
          </div>
          <div class="grid grid-cols-12 gap-[30px]">
            <div class="col-span-4">
              <ProductItem />
            </div>
            <div class="col-span-4">
              <ProductItem />
            </div>
            <div class="col-span-4">
              <ProductItem />
            </div>
            <div class="col-span-4">
              <ProductItem />
            </div>
          </div>

          <div class="my-8 text-center">
            <a-pagination v-model:current="current" :total="500" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { SettingOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref, watch } from "vue";
export default defineComponent({
  components: {
    SettingOutlined,
  },
  setup() {
    const list = ref([
      { text: "Men", amount: 20 },
      { text: "Woman", amount: 20 },
    ]);

    const activeKey = ref(["1"]);
    watch(activeKey, (val) => {
      console.log(val);
    });
    return {
      list,
      activeKey,
    };
  },
});
</script>

<template>
  <div class="col-span-2">
    <div class="border-[blur-grey] border-b-[1px] flex py-[15px] mb-3">
      <NuxtLink to="/user" class="block h-[50px]">
        <img
          class="w-full h-full rounded-full"
          :src="userStore.$state.data.user?.profileImage"
          alt=""
        />
      </NuxtLink>
      <div class="flex flex-col pl-[15px] justify-around text-base">
        <p></p>
        <NuxtLink class="text-blur-grey"
          ><Icon name="material-symbols:edit-sharp" /> Sửa hồ sơ
        </NuxtLink>
      </div>
    </div>

    <div class="pt-2">
      <a-collapse
        v-model:activeKey="activeKey"
        expand-icon-position="right"
        ghost
      >
        <a-collapse-panel
          key="1"
          header="My Account"
          class="text-base"
          :show-arrow="false"
        >
          <div class="pb-2 pl-3">
            <div
              class="flex my-2 text-blur-grey hover:cursor-pointer hover:text-blue-400"
              v-for="item in accountList"
            >
              <span
                @click="onClickAcollapse(item.text, 'category')"
                :class="
                  queryState?.category?.includes(item.text) && 'text-blue-400'
                "
                >{{ item }}</span
              >
            </div>
          </div>
        </a-collapse-panel>

        <NuxtLink class="text-black text-base" to="/user/order">
          <Icon name="icon-park-outline:bill" class="mr-[10px]" />
          My Purchase
        </NuxtLink>
      </a-collapse>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();

const accountList = ["Profile", "Change Password"];
</script>

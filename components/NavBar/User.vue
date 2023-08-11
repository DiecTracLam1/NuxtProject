<template>
  <div class="col-span-12 sm:col-span-3 md:col-span-3 xl:col-span-2">
    <div class="border-[blur-grey] border-b-[1px] flex py-[15px] mb-3">
      <NuxtLink to="/user" class="block h-[50px] w-[50px]">
        <img
          v-if="loggedIn"
          class="w-full h-full rounded-full"
          :src="getImage"
          data-not-lazy
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
      <div class="flex"></div>
      <a-collapse
        v-model:activeKey="activeKey"
        expand-icon-position="right"
        ghost
      >
        <a-collapse-panel key="1" class="text-base" :show-arrow="false">
          <template v-slot:header>
            <div class="flex items-center">
              <Icon
                class="mr-[15px] text-blue-500 text-2xl"
                name="system-uicons:user-male"
              />
              <span>My account</span>
            </div>
          </template>
          <div class="pb-2 pl-3">
            <div
              class="flex my-2 text-blur-grey hover:cursor-pointer hover:text-blue-400"
              v-for="item in accountList"
            >
              <NuxtLink
                :to="`/user/account/${item.path}`"
                class="text-black"
                :class="activeLink(item.path) && 'text-blue-400'"
                >{{ item.title }}</NuxtLink
              >
            </div>
          </div>
        </a-collapse-panel>

        <NuxtLink
          class="text-black text-base"
          :class="activeLink('order') && 'text-blue-400'"
          to="/user/order"
        >
          <Icon
            name="icon-park-outline:bill"
            class="mr-[10px] text-blue-400 text-2xl"
          />
          My Purchase
        </NuxtLink>
      </a-collapse>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
const userStore = useUserStore();
const { loggedIn, getImage } = storeToRefs(userStore);
const router = useRouter();

const activeKey = ref();
const accountList = [
  { title: "Profile", path: "profile" },
  { title: "Change Password", path: "password" },
];

const activeLink = (path: string) => {
  const pathList = router.currentRoute.value.path.split("/");
  return pathList.includes(path);
};
</script>

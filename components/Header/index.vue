<template>
  <header class="sticky top-0 bg-white w-full h-headerHeight shadow-xl z-20">
    <div
      class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] px-[15px] w-full mx-auto h-full"
    >
      <div class="grid grid-cols-12 h-full items-center gap-5">
        <div class="sm:col-span-3 col-span-6">
          <div class="h-6">
            <NuxtLink class="w-full h-full" to="/">
              <img class="" src="~/assets/images/shop.png" alt="" />
            </NuxtLink>
          </div>
        </div>
        <div class="sm:col-span-6 hidden sm:block">
          <NavBarHeaderLink />
        </div>
        <div class="sm:col-span-3 hidden sm:block">
          <NavBarHeaderRight/>
        </div>
        <div class="col-span-6 sm:hidden">
          <NavBarHeaderRightMobile/>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
const cookie = useCookie<any>("User");

onBeforeMount(async () => {
  try {
    await $fetch("/api/auth/user", {
      headers: { Authorization: `Bearer ${cookie.value.data.access_token}` },
    });
  } catch (error) {
    userStore.$reset();
  }
});

</script>

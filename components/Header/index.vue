<template>
  <header class="sticky top-0 bg-white w-full h-headerHeight shadow-xl z-10">
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
          <ul class="flex justify-around my-0">
            <li>
              <NuxtLink
                to="/"
                class="text-lg no-underline text-black active:underline hover:underline hover:cursor-pointer"
              >
                Home
              </NuxtLink>
            </li>
            <li class="group">
              <NuxtLink
                to="/shop"
                class="text-lg no-underline text-black hover:underline hover:cursor-pointer"
              >
                Shop
              </NuxtLink>
            </li>
            <li class="group">
              <NuxtLink
                to="/Blog"
                class="text-lg no-underline text-black hover:underline hover:cursor-pointer"
              >
                Blog
              </NuxtLink>
            </li>
            <li class="group">
              <NuxtLink
                to="/Contacts"
                class="text-lg no-underline text-black hover:underline hover:cursor-pointer"
              >
                Contacts
              </NuxtLink>
            </li>
            <li class="group">
              <NuxtLink
                class="text-lg no-underline text-black hover:underline hover:cursor-pointer"
              >
                About us
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="sm:col-span-3 hidden sm:block">
          <ul class="flex justify-end my-0">
            <li v-if="loggedIn" class="mx-2 mt-[2px] text-end">
              <Icon
                class="text-2xl hover:cursor-pointer"
                name="uil:heart"
                color="black"
              />
            </li>
            <li class="mx-2 mt-[2px] text-end relative">
              <a-badge :count="cartStore.cart.length">
                <NuxtLink class="inline-block" to="/cart">
                  <Icon
                    class="text-2xl hover:cursor-pointer"
                    name="uil:shopping-bag"
                    color="black"
                  />
                </NuxtLink>
              </a-badge>
            </li>
            <li v-if="loggedIn" class="mx-2 mt-[2px] text-end">
              <a-popover placement="bottom">
                <template #content>
                  <p>
                    <NuxtLink to="account" class="text-black"
                      >My Account</NuxtLink
                    >
                  </p>
                  <p>
                    <NuxtLink to="/user/order" class="text-black"
                      >My Purchase</NuxtLink
                    >
                  </p>
                  <p>
                    <NuxtLink @click="userStore.logout" class="text-black"
                      >Logout</NuxtLink
                    >
                  </p>
                </template>
                <div class="w-6 h-6">
                  <img
                    class="border-black border-[px] rounded-full w-full h-full"
                    :src="getImage"
                    alt=""
                  />
                </div>
              </a-popover>
            </li>
            <li v-if="!loggedIn" class="ml-2 mt-[2px] text-end">
              <div>
                <Icon
                  class="text-2xl hover:cursor-pointer"
                  name="uil:user-circle"
                  color="black"
                  @click="handleChangeOpenLogin(true)"
                />
                <input
                  type="checkbox"
                  class="hidden peer"
                  :checked="openLogin"
                />
                <div
                  class="fixed top-0 left-0 bottom-0 right-0 bg-[#000000] hidden opacity-50 z-10 peer-checked:block"
                  @click="handleChangeOpenLogin(false)"
                ></div>
                <Login @closeLogin="handleChangeOpenLogin" />
              </div>
            </li>
          </ul>
        </div>
        <div class="col-span-6 sm:hidden">
          <div class="flex justify-end items-center">
            <ul class="flex justify-end my-0 mr-2">
              <li class="mx-2 text-end">
                <Icon
                  class="text-3xl hover:cursor-pointer"
                  name="uil:heart"
                  color="black"
                />
              </li>
              <li class="mx-2 text-end">
                <NuxtLink to="/cart">
                  <Icon
                    class="text-3xl hover:cursor-pointer"
                    name="uil:shopping-bag"
                    color="black"
                  />
                </NuxtLink>
              </li>
            </ul>
            <div class="border-[1px] border-black p-1 w-fit">
              <label class="cursor-pointer" @click="handleChangeOpenMenu(true)">
                <Icon class="text-2xl" name="mingcute:menu-fill" />
              </label>
              <input type="checkbox" class="hidden peer" :checked="openMenu" />
              <div
                class="fixed top-0 left-0 bottom-0 right-0 bg-[#000000] hidden opacity-50 z-10 peer-checked:block"
                @click="handleChangeOpenMenu(false)"
              ></div>
              <NavBarLeftMobile @closeMenu="handleChangeOpenMenu" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";

const { $userPluxgin } = useNuxtApp();
const cartStore = useCartStore();
// $userPluxgin();
// console.log(userStore.$state)
const userStore = useUserStore();
const { loggedIn, getImage } = storeToRefs(userStore);

const openMenu = ref(false);
const openLogin = ref(false);
function handleChangeOpenMenu(value: boolean) {
  openMenu.value = value;
}

function handleChangeOpenLogin(value: boolean) {
  openLogin.value = value;
}
</script>

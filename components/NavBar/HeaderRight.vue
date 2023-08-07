<template>
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
            <NuxtLink to="/user/account/profile" class="text-black"
              >My Account</NuxtLink
            >
          </p>
          <p>
            <NuxtLink to="/user/order" class="text-black">My Purchase</NuxtLink>
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
          @click="handleOpenModal(true)"
        />

        <Modal
          @closeModal="handleOpenModal"
          :open="openModal"
          :title="modalTitle"
          size="xl"
        >
          <FormLogin @changeModal="changeModal" v-if="modalTitle === 'Login'" />
          <FormRegister
            @changeModal="changeModal"
            v-else-if="modalTitle === 'Register'"
          />
        </Modal>
      </div>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";

const openModal = ref(false);
const userStore = useUserStore();
const cartStore = useCartStore();
const { loggedIn, getImage } = storeToRefs(userStore);
const modalTitle = ref("Login");

const changeModal = (title: string) => {
  modalTitle.value = title;
};

function handleOpenModal(value: boolean) {
  openModal.value = value;
}
</script>

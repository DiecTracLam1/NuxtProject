<template>
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
</template>
<script lang="ts" setup>
const openMenu = ref(false);
function handleChangeOpenMenu(value: boolean) {
  openMenu.value = value;
}
</script>

<template>
  <div
    class="fixed top-0 left-0 bottom-0 bg-white w-[300px] transition-all duration-500 translate-x-[-100%] opacity-0 z-20 peer-checked:translate-x-0 peer-checked:opacity-100"
  >
    <span class="absolute top-5 right-5">
      <label
        @click="handleChangeOpenMenu(false)"
        class="cursor-pointer text-xl"
      >
        <Icon name="humbleicons:times" />
      </label>
    </span>

    <div class="pt-[70px]">
      <a-collapse
        v-model:activeKey="activeKey"
        expand-icon-position="right"
        accordion
      >
        <a-collapse-panel
          class="font-bold text-xl text-white"
          key="1"
          header="Menu"
        >
          <div class="w-fit" @click="handleChangeOpenMenu(false)">
            <NuxtLink class="font-normal text-normal text-black pl-3" to="/"
              >Home</NuxtLink
            >
          </div>

          <div class="w-fit" @click="handleChangeOpenMenu(false)">
            <NuxtLink class="font-normal text-normal text-black pl-3" to="/Shop"
              >Shop</NuxtLink
            >
          </div>

          <div class="w-fit" @click="handleChangeOpenMenu(false)">
            <NuxtLink class="font-normal text-normal text-black pl-3" to="/"
              >Blog</NuxtLink
            >
          </div>

          <div class="w-fit" @click="handleChangeOpenMenu(false)">
            <NuxtLink class="font-normal text-normal text-black pl-3" to="/"
              >Contact</NuxtLink
            >
          </div>
        </a-collapse-panel>
      </a-collapse>
    </div>
  </div>
</template>
<script setup lang="ts">

const activeKey = ref(["1"]);

const emit = defineEmits(["closeMenu"]);

function handleChangeOpenMenu(check: boolean) {
  emit("closeMenu", check);
}
</script>

<template>
  <header class="bg-white w-full h-[84px] shadow-xl">
    <div
      class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] px-[15px] mx-auto h-full"
    >
      <div class="grid grid-cols-12 h-full items-center gap-5">
        <div class="sm:col-span-3 col-span-6">
          <div class="h-6">
            <a class="w-full h-full" href="">
              <img class="" src="~/assets/images/shop.png" alt="" />
            </a>
          </div>
        </div>
        <div class="sm:col-span-6 hidden sm:block">
          <ul class="flex justify-around my-0">
            <li>
              <NuxtLink
                to="/"
                class="text-lg no-underline text-black active:bg-slate-500 hover:underline hover:cursor-pointer"
              >
                Home
              </NuxtLink>
            </li>
            <li class="group">
              <NuxtLink
                to="/Shop"
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
            <li class="w-8 h-8 mx-1 mt-[2px] text-end">
              <Icon
                class="text-xl hover:cursor-pointer"
                name="uil:search"
                color="black"
              />
            </li>
            <li class="w-8 h-8 mx-1 mt-[2px] text-end">
              <Icon
                class="text-xl hover:cursor-pointer"
                name="uil:heart"
                color="black"
              />
            </li>
            <li class="w-8 h-8 mx-1 mt-[2px] text-end">
              <Icon
                class="text-xl hover:cursor-pointer"
                name="uil:shopping-bag"
                color="black"
              />
            </li>
            <li class="w-8 h-8 ml-1 mt-[2px] text-end">
              <Icon
                class="text-xl hover:cursor-pointer"
                name="uil:user-circle"
                color="black"
              />
            </li>
          </ul>
        </div>
        <div class="col-span-6 sm:hidden">
          <div class="flex justify-end items-center">
            <ul class="flex justify-end my-0 mr-2">
              <li class="w-8 h-8 mx-2 text-end">
                <Icon
                  class="text-3xl hover:cursor-pointer"
                  name="uil:heart"
                  color="black"
                />
              </li>
              <li class="w-8 h-8 mx-2 text-end">
                <Icon
                  class="text-3xl hover:cursor-pointer"
                  name="uil:shopping-bag"
                  color="black"
                />
              </li>
            </ul>
            <div class="border-[1px] border-black p-1 w-fit">
              <label class="cursor-pointer" @click="handleChangeCheck(true)">
                <Icon class="text-2xl" name="mingcute:menu-fill" />
              </label>
              <input
                type="checkbox"
                id="btn-check"
                class="hidden peer"
                :checked="checked"
              />
              <label
                class="fixed top-0 left-0 bottom-0 right-0 bg-[#000000] hidden opacity-50 z-10 peer-checked:block"
                @click="handleChangeCheck(false)"
              ></label>
              <div
                class="fixed top-0 left-0 bottom-0 bg-white w-[300px] transition-all duration-500 translate-x-[-100%] opacity-0 z-20 peer-checked:translate-x-0 peer-checked:opacity-100"
              >
                <span class="absolute top-5 right-5">
                  <label
                    @click="handleChangeCheck(false)"
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
                      <div class="w-fit" @click="handleChangeCheck(false)">
                        <NuxtLink
                          class="font-normal text-normal text-black pl-3"
                          to="/"
                          >Home</NuxtLink
                        >
                      </div>

                      <div class="w-fit" @click="handleChangeCheck(false)">
                        <NuxtLink
                          class="font-normal text-normal text-black pl-3"
                          to="/Shop"
                          >Shop</NuxtLink
                        >
                      </div>

                      <div class="w-fit" @click="handleChangeCheck(false)">
                        <NuxtLink
                          class="font-normal text-normal text-black pl-3"
                          to="/"
                          >Blog</NuxtLink
                        >
                      </div>

                      <div class="w-fit" @click="handleChangeCheck(false)">
                        <NuxtLink
                          class="font-normal text-normal text-black pl-3"
                          to="/"
                          >Contact</NuxtLink
                        >
                      </div>
                    </a-collapse-panel>
                  </a-collapse>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
const checked = ref(false);

function handleChangeCheck(value) {
  checked.value = value;
}

const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
const activeKey = ref(["1"]);
</script>

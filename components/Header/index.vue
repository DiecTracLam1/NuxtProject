<template>
  <header class="bg-white w-full h-[84px] shadow-xl">
    <div class="xl:max-w-[1170px] mx-auto h-full">
      <div class="grid grid-cols-12 h-full items-center lg:gap-5">
        <div class="col-span-3">
          <div class="h-6">
            <a class="w-full h-full" href="">
              <img class="" src="~/assets/images/shop.png" alt="" />
            </a>
          </div>
        </div>
        <div class="col-span-6">
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
        <div class="col-span-3">
          <ul class="flex justify-end my-0">
            <li class="w-8 h-8 mx-1 mt-[2px]">
              <Icon
                class="text-lg hover:cursor-pointer"
                name="uil:search"
                color="black"
              />
            </li>
            <li class="w-8 h-8 mx-1 mt-[2px]">
              <Icon
                class="text-lg hover:cursor-pointer"
                name="uil:heart"
                color="black"
              />
            </li>
            <li class="w-8 h-8 mx-1 mt-[2px]">
              <Icon
                class="text-lg hover:cursor-pointer"
                name="uil:shopping-bag"
                color="black"
              />
            </li>
            <li class="w-8 h-8 mx-1 mt-[2px]">
              <Icon
                class="text-lg hover:cursor-pointer"
                name="uil:user-circle"
                color="black"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup></script>

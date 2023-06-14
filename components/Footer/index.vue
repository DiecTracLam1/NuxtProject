<template>
  <footer class="bg-black py-[50px] text-[#969696]">
    <div
      class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] w-full px-[15px] mx-auto h-full"
    >
      <div class="grid grid-cols-12 lg:gap-x-24 gap-x-7.5">
        <div class="xs:col-span-6 sm:col-span-6 md:col-span-3 col-span-12">
          <div class="flex flex-col mb-[30px]">
            <div class="h-7 mb-[30px]">
              <img
                src="https://preview.colorlib.com/theme/malefashion/img/footer-logo.png"
                alt=""
              />
            </div>

            <p class="mb-[30px] text-normal">
              The customer is at the heart of our unique business model, which
              includes design.
            </p>

            <div class="">
              <img
                src="https://preview.colorlib.com/theme/malefashion/img/payment.png.webp"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="xs:col-span-6 sm:col-span-3 md:col-span-3 col-span-12">
          <div class="flex flex-col">
            <p
              class="font-bold leading-[18px] mb-5 text-white text-normal tracking-[2px]"
            >
              SHOPPING
            </p>
            <ul>
              <li class="leading-9">
                <NuxtLink class="text-normal"> Clothing Store </NuxtLink>
              </li>
              <li class="leading-9">
                <NuxtLink class="text-normal">Trending Shoes </NuxtLink>
              </li>
              <li class="leading-9">
                <NuxtLink class="text-normal">Trending Shoes </NuxtLink>
              </li>
              <li class="leading-9">
                <NuxtLink class="text-normal">Sale</NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <div class="xs:col-span-6 sm:col-span-3 md:col-span-3 col-span-12">
          <div class="flex flex-col">
            <p
              class="font-bold leading-[18px] mb-5 text-white text-normal tracking-[2px]"
            >
              SHOPPING
            </p>
            <ul>
              <li class="leading-9">
                <NuxtLink class="text-normal"> Clothing Store </NuxtLink>
              </li>
              <li class="leading-9">
                <NuxtLink class="text-normal">Trending Shoes </NuxtLink>
              </li>
              <li class="leading-9">
                <NuxtLink class="text-normal">Trending Shoes </NuxtLink>
              </li>
              <li class="leading-9">
                <NuxtLink class="text-normal">Sale</NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <div class="xs:col-span-6 sm:col-span-6 md:col-span-3 col-span-12">
          <div class="flex flex-col">
            <p
              class="font-bold leading-[18px] mb-5 text-white text-normal tracking-[2px]"
            >
              NEWLETTER
            </p>

            <p class="mb-[10px]">
              Be the first to know about new arrivals, look books, sales &
              promos!
            </p>

            <form class="flex border-b-white border-b-2 py-3">
              <input
                class="flex-1 border-none outline-none bg-black"
                type="text"
              />
              <button><Icon name="icon-park-outline:email-block" /></button>
            </form>
          </div>
        </div>
      </div>

      <div
        class="mt-10 relative before:absolute before:content-[''] before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-[#292929]"
      >
        <p class="text-center pt-5">
          Copyright © 20232020 All rights reserved | This template is made with
          <span
            ><Icon class="text-[#E53638] mb-1" name="heroicons-outline:heart"
          /></span>
          by <span class="text-[#E53638]">Colorlib</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<template>
  <div>
    <Swiper
      class="h-[800px]"
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide
        class="bg-cover bg-center bg-no-repeat bg-[url('https://preview.colorlib.com/theme/malefashion/img/hero/hero-1.jpg.webp')]"
      >
        <div class="grid grid-cols-12 lg:max-w-6xl mx-auto h-full">
          <div class="col-span-5">
            <div class="grid grid-rows-6 h-full">
              <div class="flex flex-col justify-center row-span-6">
                <h6 class="text-[#e53638] uppercase font-semibold mb-7">
                  Summer Collection
                </h6>
                <h1 class="text-5xl font-semibold mb-[30px] leading-[54px]">
                  Fall - Winter Collections 2030
                </h1>
                <p class="text-[#3d3d3d] mb-9">
                  A specialist label creating luxury essentials. Ethically
                  crafted with an unwavering commitment to exceptional quality.
                </p>
                <NuxtLink
                  class="inline-block bg-black text-white w-36 text-center py-[14px] uppercase font-bold text-[13px] hover:cursor-pointer"
                >
                  Shop Now
                  <span
                    ><Icon
                      class="font-medium"
                      name="uil:arrow-right"
                      color="white"
                  /></span>
                </NuxtLink>
              </div>
              <ul class="self-end flex">
                <li>
                  <NuxtLink class="mr-8 hover:cursor-pointer">
                    <Icon
                      class="font-medium"
                      name="uil:twitter"
                      color="black"
                    />
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="mr-8 hover:cursor-pointer">
                    <Icon class="font-medium" name="uil:" color="black" />
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="mr-8 hover:cursor-pointer"></NuxtLink>
                </li>
                <li>
                  <NuxtLink class="mr-8 hover:cursor-pointer"
                    ><Icon
                      class="font-medium"
                      name="uil:intagram"
                      color="black"
                    />
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        class="bg-cover bg-center bg-no-repeat bg-[url('https://preview.colorlib.com/theme/malefashion/img/hero/hero-1.jpg.webp')]"
      >
        <div class="grid grid-cols-12 lg:max-w-6xl mx-auto h-full">
          <div class="col-span-5">
            <div class="grid grid-rows-6 h-full">
              <div class="flex flex-col justify-center row-span-6">
                <h6 class="text-[#e53638] uppercase font-semibold mb-7">
                  Summer Collection
                </h6>
                <h1 class="text-5xl font-semibold mb-[30px] leading-[54px]">
                  Fall - Winter Collections 2030
                </h1>
                <p class="text-[#3d3d3d] mb-9">
                  A specialist label creating luxury essentials. Ethically
                  crafted with an unwavering commitment to exceptional quality.
                </p>
                <NuxtLink
                  class="inline-block bg-black text-white w-36 text-center py-[14px] uppercase font-bold text-[13px] hover:cursor-pointer"
                >
                  Shop Now
                  <span
                    ><Icon
                      class="font-medium"
                      name="uil:arrow-right"
                      color="white"
                  /></span>
                </NuxtLink>
              </div>
              <ul class="self-end flex">
                <li>
                  <NuxtLink class="mr-8 hover:cursor-pointer">
                    <Icon
                      class="font-medium"
                      name="uil:twitter"
                      color="black"
                    />
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="mr-8 hover:cursor-pointer">
                    <Icon class="font-medium" name="uil:" color="black" />
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="mr-8 hover:cursor-pointer"></NuxtLink>
                </li>
                <li>
                  <NuxtLink class="mr-8 hover:cursor-pointer"
                    ><Icon
                      class="font-medium"
                      name="uil:intagram"
                      color="black"
                    />
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <!-- <div
      class="bg-cover bg-center bg-no-repeat bg-[url('https://preview.colorlib.com/theme/malefashion/img/hero/hero-1.jpg.webp')] h-[800px]"
    >
      <div class="grid grid-cols-12 lg:max-w-6xl mx-auto h-full">
        <div class="col-span-5">
          <div class="grid grid-rows-6 h-full">
            <div class="flex flex-col justify-center row-span-6">
              <h6 class="text-[#e53638] uppercase font-semibold mb-7">
                Summer Collection
              </h6>
              <h1 class="text-5xl font-semibold mb-[30px] leading-[54px]">
                Fall - Winter Collections 2030
              </h1>
              <p class="text-[#3d3d3d] mb-9">
                A specialist label creating luxury essentials. Ethically crafted
                with an unwavering commitment to exceptional quality.
              </p>
              <NuxtLink
                class="inline-block bg-black text-white w-36 text-center py-[14px] uppercase font-bold text-[13px] hover:cursor-pointer"
              >
                Shop Now
                <span
                  ><Icon
                    class="font-medium"
                    name="uil:arrow-right"
                    color="white"
                /></span>
              </NuxtLink>
            </div>
            <ul class="self-end flex">
              <li>
                <NuxtLink class="mr-8 hover:cursor-pointer">
                  <Icon class="font-medium" name="uil:twitter" color="black" />
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="mr-8 hover:cursor-pointer">
                  <Icon class="font-medium" name="uil:" color="black" />
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="mr-8 hover:cursor-pointer"></NuxtLink>
              </li>
              <li>
                <NuxtLink class="mr-8 hover:cursor-pointer"
                  ><Icon
                    class="font-medium"
                    name="uil:intagram"
                    color="black"
                  />
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div> -->
    <div class="">
      <div class="grid grid-cols-12 max-w-70 mx-auto"></div>
    </div>
  </div>
</template>

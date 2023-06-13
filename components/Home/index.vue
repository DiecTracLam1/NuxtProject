<template>
  <div>
    <Swiper
      class="h-[800px] relative"
      :modules="[SwiperAutoplay, SwiperNavigation]"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
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
        loading="lazy"
      >
        <div class="lg:max-w-[1170px] mx-auto h-full">
          <div class="grid grid-cols-12 h-full">
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
                    crafted with an unwavering commitment to exceptional
                    quality.
                  </p>
                  <UIButton size="xl" text="Shop Now">
                    <span>
                      <Icon
                        class="font-medium text-base"
                        name="uil:arrow-right"
                        color="white"
                      />
                    </span>
                  </UIButton>
                </div>
                <ul class="self-end flex">
                  <li>
                    <NuxtLink class="mr-8 hover:cursor-pointer">
                      <Icon
                        class="font-medium"
                        name="uil:twitter"
                        color="#3d3d3d"
                      />
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="mr-8 hover:cursor-pointer">
                      <Icon
                        class="font-medium"
                        name="icomoon-free:facebook"
                        color="#3d3d3d"
                      />
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="mr-8 hover:cursor-pointer">
                      <Icon
                        class="font-medium"
                        name="mdi:pinterest"
                        color="#3d3d3d"
                      />
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="mr-8 hover:cursor-pointer"
                      ><Icon
                        class="font-medium"
                        name="fa:instagram"
                        color="#3d3d3d"
                      />
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <div class="absolute z-10">asd</div>
    </Swiper>
    <!-- <div class="">
      <div class="grid grid-cols-12 row-span-6 lg:max-w-[1170px] mx-auto gap-5">
        <div class="col-span-7 col-start-6 row-span-4 row-start-1">
          <div >
            <h1>das</h1>
            <img src="" alt="">
          </div>
        </div>
        <div class="col-span-6 row-start-3">sad</div>
        <div class="col-span-6">das</div>

      </div>
    </div> -->

    <!-- Product -->
    <div class="lg:max-w-[1170px] mx-auto my-[100px]">
      <ul class="flex justify-center py-24">
        <li class="mr-[92px] font-bold text-2xl"><p>Best Seller</p></li>
        <li class="mr-[92px] font-bold text-2xl"><p>New Arrivals</p></li>
        <li class="font-bold text-2xl"><p>Hot Sales</p></li>
      </ul>
      <div
        class="grid grid-cols-12 lg:max-w-[1170px] mx-auto gap-x-[30px] gap-y-10"
      >
        <div class="col-span-3">
          <div class="flex flex-col overflow-hidden hover:cursor-pointer group">
            <div class="h-[260px] relative">
              <img
                class="w-full h-full"
                src="https://preview.colorlib.com/theme/malefashion/img/product/product-2.jpg.webp"
                alt=""
              />
              <span
                class="absolute bg-white font-bold top-5 text-[11px] px-[15px] py-1 inline-block"
                >NEW</span
              >
              <ul
                class="absolute top-5 right-[-100px] text-[11px] group-hover:right-5 transition-all duration-[700ms]"
              >
                <li class="bg-white mb-[10px] p-[10px] text-base leading-4">
                  <span><Icon class="" name="uil:heart" /></span>
                </li>
                <li class="bg-white mb-[10px] p-[10px] text-base leading-4">
                  <span><Icon class="" name="uil:search" /></span>
                </li>
              </ul>
            </div>
            <div class="relative mt-6">
              <p class="text-[15px] mb-[5px]">Piqué Biker Jacket</p>
              <p class="text-[14px] mb-[6px]">Rate</p>
              <p class="text-lg font-bold">$67.24</p>
              <button
                class="absolute text-white bottom-3 right-[-100px] group-hover:right-5 bg-black py-1 px-2 text-xs transition-all duration-[700ms]"
              >
                +Add to cart
              </button>
            </div>
          </div>
        </div>

        <div class="col-span-3">
          <div class="flex flex-col overflow-hidden hover:cursor-pointer group">
            <div class="h-[260px] relative">
              <img
                class="w-full h-full"
                src="https://preview.colorlib.com/theme/malefashion/img/product/product-2.jpg.webp"
                alt=""
              />
              <span
                class="absolute bg-white font-bold top-5 text-[11px] px-[15px] py-1 inline-block"
                >NEW</span
              >
              <ul
                class="absolute top-5 right-[-100px] text-[11px] group-hover:right-5 transition-all duration-[700ms]"
              >
                <li class="bg-white mb-[10px] p-[10px] text-base leading-4">
                  <span><Icon class="" name="uil:heart" /></span>
                </li>
                <li class="bg-white mb-[10px] p-[10px] text-base leading-4">
                  <span><Icon class="" name="uil:search" /></span>
                </li>
              </ul>
            </div>
            <div class="relative mt-6">
              <p class="text-[15px] mb-[5px]">Piqué Biker Jacket</p>
              <p class="text-[14px] mb-[6px]">Rate</p>
              <p class="text-lg font-bold">$67.24</p>
              <button
                class="absolute text-white bottom-3 right-[-100px] group-hover:right-5 bg-black py-1 px-2 text-xs transition-all duration-[700ms]"
              >
                +Add to cart
              </button>
            </div>
          </div>
        </div>

        <div class="col-span-3">
          <div class="flex flex-col overflow-hidden hover:cursor-pointer group">
            <div class="h-[260px] relative">
              <img
                class="w-full h-full"
                src="https://preview.colorlib.com/theme/malefashion/img/product/product-2.jpg.webp"
                alt=""
              />
              <span
                class="absolute bg-white font-bold top-5 text-[11px] px-[15px] py-1 inline-block"
                >NEW</span
              >
              <ul
                class="absolute top-5 right-[-100px] text-[11px] group-hover:right-5 transition-all duration-[700ms]"
              >
                <li class="bg-white mb-[10px] p-[10px] text-base leading-4">
                  <span><Icon class="" name="uil:heart" /></span>
                </li>
                <li class="bg-white mb-[10px] p-[10px] text-base leading-4">
                  <span><Icon class="" name="uil:search" /></span>
                </li>
              </ul>
            </div>
            <div class="relative mt-6">
              <p class="text-[15px] mb-[5px]">Piqué Biker Jacket</p>
              <p class="text-[14px] mb-[6px]">Rate</p>
              <p class="text-lg font-bold">$67.24</p>
              <button
                class="absolute text-white bottom-3 right-[-100px] group-hover:right-5 bg-black py-1 px-2 text-xs transition-all duration-[700ms]"
              >
                +Add to cart
              </button>
            </div>
          </div>
        </div>

        <div class="col-span-3">
          <div class="flex flex-col overflow-hidden hover:cursor-pointer group">
            <div class="h-[260px] relative">
              <img
                class="w-full h-full"
                src="https://preview.colorlib.com/theme/malefashion/img/product/product-2.jpg.webp"
                alt=""
              />
              <span
                class="absolute bg-white font-bold top-5 text-[11px] px-[15px] py-1 inline-block"
                >NEW</span
              >
              <ul
                class="absolute top-5 right-[-100px] text-[11px] group-hover:right-5 transition-all duration-[700ms]"
              >
                <li class="bg-white mb-[10px] p-[10px] text-base leading-4">
                  <span><Icon class="" name="uil:heart" /></span>
                </li>
                <li class="bg-white mb-[10px] p-[10px] text-base leading-4">
                  <span><Icon class="" name="uil:search" /></span>
                </li>
              </ul>
            </div>
            <div class="relative mt-6">
              <p class="text-[15px] mb-[5px]">Piqué Biker Jacket</p>
              <p class="text-[14px] mb-[6px]">Rate</p>
              <p class="text-lg font-bold">$67.24</p>
              <button
                class="absolute text-white bottom-3 right-[-100px] group-hover:right-5 bg-black py-1 px-2 text-xs transition-all duration-[700ms]"
              >
                +Add to cart
              </button>
            </div>
          </div>
        </div>

        <div class="col-span-3">
          <div class="flex flex-col overflow-hidden hover:cursor-pointer group">
            <div class="h-[260px] relative">
              <img
                class="w-full h-full"
                src="https://preview.colorlib.com/theme/malefashion/img/product/product-2.jpg.webp"
                alt=""
              />
              <span
                class="absolute bg-white font-bold top-5 text-[11px] px-[15px] py-1 inline-block"
                >NEW</span
              >
              <ul
                class="absolute top-5 right-[-100px] text-[11px] group-hover:right-5 transition-all duration-[700ms]"
              >
                <li class="bg-white mb-[10px] p-[10px] text-base leading-4">
                  <span><Icon class="" name="uil:heart" /></span>
                </li>
                <li class="bg-white mb-[10px] p-[10px] text-base leading-4">
                  <span><Icon class="" name="uil:search" /></span>
                </li>
              </ul>
            </div>
            <div class="relative mt-6">
              <p class="text-[15px] mb-[5px]">Piqué Biker Jacket</p>
              <p class="text-[14px] mb-[6px]">Rate</p>
              <p class="text-lg font-bold">$67.24</p>
              <button
                class="absolute text-white bottom-3 right-[-100px] group-hover:right-5 bg-black py-1 px-2 text-xs transition-all duration-[700ms]"
              >
                +Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Spad -->
    <!-- <div class="bg-[#f3f2ee] py-[150px] relative">
      <div class="lg:max-w-[1170px] mx-auto z-10">
        <div class="grid grid-cols-12">
          <div class="col-span-4">
            <div class="flex flex-col">
              <h5>Clothings Hot</h5>
              <h5>Shoe Collection</h5>
              <h5>Accessories</h5>
            </div>
          </div>
          <div class="col-span-4"></div>
          <div class="col-span-4"></div>
        </div>
      </div>
    </div> -->

    <!-- Intagram -->
    <div
      class="grid grid-cols-12 row-span-6 lg:max-w-[1170px] mx-auto gap-[15px] mb-[100px]"
    >
      <div class="col-span-8">
        <div class="grid grid-cols-12">
          <div class="col-span-4">
            <div class="h-[261px]">
              <img
                class="w-full h-full"
                src="https://preview.colorlib.com/theme/malefashion/img/instagram/instagram-1.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="col-span-4">
            <div class="h-[261px]">
              <img
                class="w-full h-full"
                src="https://preview.colorlib.com/theme/malefashion/img/instagram/instagram-1.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="col-span-4">
            <div class="h-[261px]">
              <img
                class="w-full h-full"
                src="https://preview.colorlib.com/theme/malefashion/img/instagram/instagram-1.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="col-span-4">
            <div class="h-[261px]">
              <img
                class="w-full h-full"
                src="https://preview.colorlib.com/theme/malefashion/img/instagram/instagram-1.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="col-span-4">
            <div class="h-[261px]">
              <img
                class="w-full h-full"
                src="https://preview.colorlib.com/theme/malefashion/img/instagram/instagram-1.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="col-span-4">
            <div class="h-[261px]">
              <img
                class="w-full h-full"
                src="https://preview.colorlib.com/theme/malefashion/img/instagram/instagram-1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-4">
        <div class="flex flex-col justify-center h-full">
          <h1 class="font-medium text-4xl mb-[30px]">Intagram</h1>
          <p class="text-[15px] leading-[25px] text-[#3d3d3d] mb-[65px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <h4 class="font-semibold text-[30px] text-[#E53638] leading-[25px]">
            #Male_Fashion
          </h4>
        </div>
      </div>
    </div>

    <!-- Latest -->
    <div class="lg:max-w-[1170px] mx-auto my-[100px]">
      <div class="text-center mb-[45px]">
        <h5 class="text-[#E53638] mb-[15px]">LATEST NEWS</h5>
        <h2 class="text-4xl font-bold">Fashion New Trends</h2>
      </div>
      <div class="grid grid-cols-12 gap-[30px]">
        <div class="col-span-4">
          <div class="relative">
            <div class="h-[270px]">
              <img
                class="h-full w-full"
                src="https://preview.colorlib.com/theme/malefashion/img/blog/blog-1.jpg"
                alt=""
              />
            </div>
            <div
              class="bg-white mt-[-15%] mx-auto p-[30px] w-[300px] relative z-10"
            >
              <span class="text-[13px] text-[#919191]">
                <Icon class="mr-1 mb-1" name="tabler:calendar-check" />16
                February 2020</span
              >
              <h5 class="text-lg font-bold my-[6px]">
                What Curling Irons Are The Best Ones
              </h5>
              <p
                class="font-bold relative text-[13px] tracking-[4px] leading-5 w-fit hover:cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-black after:w-1/2 after:h-[2px] hover:after:w-full hover:after:bg-red-400 after:transition-all after:duration-750"
              >
                READ MORE
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

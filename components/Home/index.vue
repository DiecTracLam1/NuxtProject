<template>
  <div>
    <!-- Slide -->
    <VueperSlides fixed-height="800px" fade>
      <template #arrow-left>
        <Icon name="octicon:arrow-right-24" color="black" />
      </template>

      <template #arrow-right>
        <Icon name="octicon:arrow-right-24" color="black" />
      </template>

      <VueperSlide v-for="(slide, i) in slides" :key="i" :image="slide.image">
        <template #content>
          <div
            class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] w-full px-[15px] mx-auto h-full"
          >
            <div class="grid grid-cols-12 h-full">
              <div class="col-span-10 sm:col-span-5">
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
                    <Button size="xl" text="Shop Now">
                      <span>
                        <Icon
                          class="font-medium text-base"
                          name="uil:arrow-right"
                          color="white"
                        />
                      </span>
                    </Button>
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
        </template>
      </VueperSlide>
    </VueperSlides>

    <!-- <div class="">
      <div class="grid grid-cols-12 row-span-6 md:max-w-[960px] xl:max-w-[1170px] px-[15px] mx-auto gap-5">
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
    <div
      class="md:max-w-[960px] xl:max-w-[1170px] px-[15px] mx-auto my-[100px]"
    >
      <ul class="flex justify-center py-24">
        <li class="mr-[15px] sm:mr-[92px] font-bold xs:text-2xl text-base">
          <p>Best Seller</p>
        </li>
        <li class="mr-[15px] sm:mr-[92px] font-bold xs:text-2xl text-base">
          <p>New Arrivals</p>
        </li>
        <li class="font-bold xs:text-2xl text-base"><p>Hot Sales</p></li>
      </ul>
      <div
        class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] px-[15px] mx-auto"
      >
        <!-- <div class="grid grid-cols-12 sm:gap-x-7.5 gap-y-10">
          <div class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3">
            <ProductItem />
          </div>

          <div class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3">
            <ProductItem />
          </div>

          <div class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3">
            <ProductItem />
          </div>

          <div class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3">
            <ProductItem />
          </div>

          <div class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3">
            <ProductItem />
          </div>
        </div> -->
      </div>
    </div>

    <!-- Spad -->
    <!-- <div class="bg-[#f3f2ee] py-[150px] mb-[100px] relative ">
      <div class="md:max-w-[960px] xl:max-w-[1170px] px-[15px] mx-auto z-10">
        <div class="grid grid-cols-12">
          <div class="col-span-4">
            <div class="flex flex-col">
              <h5>Clothings Hot</h5>
              <h5>Shoe Collection</h5>
              <h5>Accessories</h5>
            </div>
          </div>
          <div class="col-span-4">
            <div class="">
              <img src="~/assets/images/product-sale.png" alt="">
            </div>
          </div>
          <div class="col-span-4"></div>
        </div>
      </div>
    </div> -->

    <!-- Intagram -->
    <div
      class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] px-[15px] mx-auto mb-[100px] w-full"
    >
      <div class="grid grid-cols-12 gap-[15px]">
        <div class="col-span-12 sm:col-span-12 md:col-span-8">
          <div class="grid grid-cols-12">
            <div class="col-span-6 sm:col-span-4">
              <div class="h-[261px]">
                <img
                  class="w-full h-full"
                  src="~/assets/images/instagram-1.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="col-span-6 sm:col-span-4">
              <div class="h-[261px]">
                <img
                  class="w-full h-full"
                  src="~/assets/images/instagram-2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="col-span-6 sm:col-span-4">
              <div class="h-[261px]">
                <img
                  class="w-full h-full"
                  src="~/assets/images/instagram-3.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="col-span-6 sm:col-span-4">
              <div class="h-[261px]">
                <img
                  class="w-full h-full"
                  src="~/assets/images/instagram-4.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="col-span-6 sm:col-span-4">
              <div class="h-[261px]">
                <img
                  class="w-full h-full"
                  src="~/assets/images/instagram-5.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="col-span-6 sm:col-span-4">
              <div class="h-[261px]">
                <img
                  class="w-full h-full"
                  src="~/assets/images/instagram-6.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-12 md:col-span-4">
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
    </div>

    <!-- Latest -->
    <div
      class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] w-full px-[15px] mx-auto my-[100px]"
    >
      <div class="text-center mb-[45px]">
        <h5 class="text-[#E53638] mb-[15px]">LATEST NEWS</h5>
        <h2 class="text-4xl font-bold">Fashion New Trends</h2>
      </div>
      <div class="grid grid-cols-12 sm:gap-x-[30px] gap-y-[30px]">
        <div class="col-span-12 sm:col-span-6 md:col-span-4">
          <div class="relative">
            <div class="h-[270px]">
              <img
                class="h-full w-full"
                src="~/assets/images/blog-1.jpg"
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

        <div class="col-span-12 sm:col-span-6 md:col-span-4">
          <div class="relative">
            <div class="h-[270px]">
              <img
                class="h-full w-full"
                src="~/assets/images/blog-2.jpg"
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

        <div class="col-span-12 sm:col-span-6 md:col-span-4">
          <div class="relative">
            <div class="h-[270px]">
              <img
                class="h-full w-full"
                src="~/assets/images/blog-3.jpg"
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
<script setup>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

const slides = [
  {
    title: "",
    content: "",
    image:
      "https://preview.colorlib.com/theme/malefashion/img/hero/hero-1.jpg.webp",
  },
  {
    title: "",
    content: "",
    image:
      "https://preview.colorlib.com/theme/malefashion/img/hero/hero-2.jpg.webp",
  },
];

</script>

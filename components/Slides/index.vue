<template>
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
</template>
<script setup lang="ts">
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

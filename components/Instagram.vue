<template>
  <div
    class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] px-[15px] mx-auto mb-[100px] w-full"
  >
    <div class="grid grid-cols-12 gap-[15px]">
      <div class="col-span-12 sm:col-span-12 md:col-span-8">
        <div class="grid grid-cols-12">
          <div v-for="index in 6" class="col-span-6 sm:col-span-4">
            <div class="h-[261px]">
              <img
                class="w-full h-full"
                :src="`/_nuxt/assets/images/instagram-${index}.jpg`"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 md:col-span-4">
        <div class="flex flex-col justify-center h-full">
          <h1 class="font-medium text-4xl mb-[30px]">Intagram</h1>
          <p class="text-[15px] leading-[25px] text-normal-color mb-[65px]">
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
</template>

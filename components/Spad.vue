<template>
  <div class="bg-[#f3f2ee] py-[150px] mb-[100px] relative">
    <div class="absolute w-[26%] md:h-[300px] h-[200px] left-0 bg-white"></div>
    <div
      class="sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] px-[15px] mx-auto z-10 relative"
    >
      <div class="grid grid-cols-12 gap-[30px]">
        <div class="md:col-span-4 col-span-12">
          <div class="flex flex-col justify-around h-full">
            <h5 class="text-[34px] text-blur-grey lead-[74px] m-0">
              Clothings Hot
            </h5>
            <h5 class="font-bold text-[34px] lead-[74px] m-0">
              Shoe Collection
            </h5>
            <h5 class="text-[34px] text-blur-grey lead-[74px] m-0">
              Accessories
            </h5>
          </div>
        </div>
        <div class="md:col-span-4 col-span-12">
          <div class="relative md:m-0 mx-auto w-fit">
            <img src="~/assets/images/product-sale.png" alt="" />
            <div
              class="absolute bg-black md:-top-9 top-1 right-1 w-[100px] h-[100px] text-center pt-[22px] rounded-full"
            >
              <h5 class="text-white text-normal">Sale Of</h5>
              <h2 class="font-semibold text-white text-xl">$29.99</h2>
            </div>
          </div>
        </div>
        <div class="md:col-span-4 col-span-12">
          <div class="ml-[8%]">
            <p class="font-bold text-red-500 mb-[15px]">DEAL OF THE WEEK</p>
            <h1 class="font-bold text-4xl mb-6">
              Multi-pocket Chest Bag Black
            </h1>
            <div class="flex justify-around -ml-6 mb-5">
              <div class="flex flex-col items-center">
                <span class="inline-block font-bold text-4xl mb-5">30</span>
                <p class="text-[#3d3d3d]">Days</p>
              </div>
              <div
                class="relative before:absolute before:content-[':'] before:font-bold before:text-2xl before:text-[#3d3d3d] before:top-1 before:-left-6"
              >
                <span class="inline-block font-bold text-4xl mb-5">30</span>
                <p class="text-[#3d3d3d]">Hours</p>
              </div>
              <div
                class="relative before:absolute before:content-[':'] before:font-bold before:text-2xl before:text-[#3d3d3d] before:top-1 before:-left-6"
              >
                <span class="inline-block font-bold text-4xl mb-5">30</span>
                <p class="text-[#3d3d3d]">Minutes</p>
              </div>
              <div
                class="relative before:absolute before:content-[':'] before:font-bold before:text-2xl before:text-[#3d3d3d] before:top-1 before:-left-6"
              >
                <span class="inline-block font-bold text-4xl mb-5">30</span>
                <p class="text-[#3d3d3d]">Seconds</p>
              </div>
            </div>
            <Button text="SHOP NOW" size="Xl" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

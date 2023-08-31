<template>
  <div>
    <BreadCrum title="About Us" :pathList="['About Us']" />
    <div
      class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] mx-auto h-full"
    >
      <div class="px-[15px] pt-[100px] pb-[70px]">
        <div class="grid grid-cols-12 gap-[30px]">
          <div class="col-span-12">
            <img src="@/assets/images/about-us.jpg" alt="" />
          </div>
          <div class="col-span-12 xs:col-span-6 sm:col-span-4">
            <h4 class="text-2xl font-bold">Who We Are ?</h4>
            <p class="text-normal-color">
              Contextual advertising programs sometimes have strict policies
              that need to be adhered too. Let’s take Google as an example.
            </p>
          </div>
          <div class="col-span-12 xs:col-span-6 sm:col-span-4">
            <h4 class="text-2xl font-bold">Who We Do ?</h4>
            <p class="text-normal-color">
              In this digital generation where information can be easily
              obtained within seconds, business cards still have retained their
              importance.
            </p>
          </div>
          <div class="col-span-12 xs:col-span-6 sm:col-span-4">
            <h4 class="text-2xl font-bold">Why Choose Us ?</h4>
            <p class="text-normal-color">
              A two or three storey house is the ideal way to maximise the piece
              of earth on which our home sits, but for older or infirm people.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-12">
      <div class="col-span-12 md:col-span-6">
        <div class="bg-[#f3f2ee] flex items-center h-full">
          <div
            class="sm:px-[45px] lg:px-[45px] xl:px-[150px] px-[150px] py-[100px] h-full"
          >
            <div class="text-center h-full w-fit mx-auto">
              <Icon name="ri:double-quotes-r" class="text-6xl text-red-500" />
              <p class="text-xl mb-[30px] mt-3">
                “Going out after work? Take your butane curling iron with you to
                the office, heat it up, style your hair before you leave the
                office and you won’t have to make a trip back home.”
              </p>
              <div class="flex justify-center mt-">
                <img
                  data-src="@/assets/images/testimonial-author.jpg"
                  v-lazy="`/_nuxt/assets/images/testimonial-author.jpg`"
                  class="h-[60px] rounded-full"
                  alt=""
                />
                <div class="text-start ml-5 text-lg">
                  <h5 class="font-bold mb-1">Augusta Schultz</h5>
                  <h5 class="text-blur-grey m-0">Fashion Design</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 md:col-span-6">
        <div class="h-[600px]">
          <img
            data-src="@/assets/images/testimonial-pic.jpg"
            v-lazy="`_nuxt/assets/images/testimonial-pic.jpg`"
            class="h-full w-full"
            alt=""
          />
        </div>
      </div>
    </div>

    <div
      class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] mx-auto h-full"
    >
      <div class="pt-[100px] pb-[70px] border-b-[1px]">
        <div class="grid grid-cols-12 gap-[30px]">
          <div class="xs:col-span-6 md:col-span-3 col-span-12">
            <div class="flex items-center">
              <h2 class="font-bold text-6xl m-0">102</h2>
              <div class="ml-[15px] text-lg font-bold">
                <p class="m-0">Our</p>
                <p class="m-0">Clients</p>
              </div>
            </div>
          </div>

          <div class="xs:col-span-6 md:col-span-3 col-span-12">
            <div class="flex items-center">
              <h2 class="font-bold text-6xl m-0">30</h2>
              <div class="ml-[15px] text-lg font-bold">
                <p class="m-0">Total</p>
                <p class="m-0">Categories</p>
              </div>
            </div>
          </div>

          <div class="xs:col-span-6 md:col-span-3 col-span-12">
            <div class="flex items-center">
              <h2 class="font-bold text-6xl m-0">102</h2>
              <div class="ml-[15px] text-lg font-bold">
                <p class="m-0">In</p>
                <p class="m-0">Country</p>
              </div>
            </div>
          </div>

          <div class="xs:col-span-6 md:col-span-3 col-span-12">
            <div class="flex items-center">
              <h2 class="font-bold text-6xl m-0">98%</h2>
              <div class="ml-[15px] text-lg font-bold">
                <p class="m-0">Happy</p>
                <p class="m-0">Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] mx-auto pt-[100px] pb-[70px] h-full"
    >
      <div class="grid grid-cols-12 gap-[30px]">
        <div class="col-span-12">
          <div class="text-center mb-[45px]">
            <p class="font-bold text-red-500">OUR TEAM</p>
            <p class="font-bold text-4xl">Meet Our Team</p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-12 xs:gap-[30px] gap-y-[30px]">
        <div
          v-for="author in authorList"
          class="xs:col-span-6 md:col-span-3 col-span-12"
        >
          <div class="flex flex-col">
            <img
              :data-src="`/_nuxt/assets/images/${author.image}`"
              v-lazy="`/_nuxt/assets/images/${author.image}`"
              alt=""
            />
            <div class="mt-[25px]">
              <p class="font-bold text-2xl mb-2">{{ author.name }}</p>
              <p class="text-blur-grey m-0">{{ author.position }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] mx-auto h-full"
    >
      <div class="grid grid-cols-12 gap-[30px]">
        <div class="col-span-12">
          <div class="text-center mb-[45px]">
            <p class="font-bold text-red-500">PARTNER</p>
            <p class="font-bold text-4xl">Happy Clients</p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-12 gap-[30px]">
        <div v-for="index in 8" class="xs:col-span-4 md:col-span-3 col-span-6">
          <div class="w-fit mx-auto mb-[75px]">
            <img
              :data-src="`_nuxt/assets/images/client-${index}.jpg`"
              v-lazy="`_nuxt/assets/images/client-${index}.jpg`"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const authorList = [
  {
    name: "John Smith",
    position: "Fashion Design",
    image: "author-1.jpg",
  },
  {
    name: "Christine Wise",
    position: "C.E.O",
    image: "author-2.jpg",
  },
  {
    name: "Sean Robbins",
    position: "Manager",
    image: "author-3.jpg",
  },
  {
    name: "Lucy Myers",
    position: "Delivery",
    image: "author-4.jpg",
  },
];
</script>

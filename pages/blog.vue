<template>
  <div>
    <div
      class="bg-[url('@/assets/images/breadcrumb-bg.jpg')] flex justify-center items-center h-[350px]"
    >
      <p class="font-bold m-0 text-white text-6xl">Our Blog</p>
    </div>

    <div
      class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] mx-auto my-[100px]"
    >
      <div class="grid grid-cols-12 gap-[30px]">
        <div class="col-span-12 sm:col-span-6 md:col-span-4">
          <Blog
            image="blog-1.jpg"
            title="What Curling Irons Are The Best Ones"
          />
        </div>

        <div class="col-span-12 sm:col-span-6 md:col-span-4">
          <Blog image="blog-2.jpg" title="Eternity Bands Do Last Forever" />
        </div>

        <div class="col-span-12 sm:col-span-6 md:col-span-4">
          <Blog image="blog-3.jpg" title="The Health Benefits Of Sunglasses" />
        </div>

        <div class="col-span-12 sm:col-span-6 md:col-span-4">
          <Blog
            image="blog-4.jpg"
            title="What Curling Irons Are The Best Ones"
          />
        </div>

        <div class="col-span-12 sm:col-span-6 md:col-span-4">
          <Blog image="blog-5.jpg" title="Eternity Bands Do Last Forever" />
        </div>

        <div class="col-span-12 sm:col-span-6 md:col-span-4">
          <Blog image="blog-6.jpg" title="The Health Benefits Of Sunglasses" />
        </div>

        <div class="col-span-12 sm:col-span-6 md:col-span-4">
          <Blog
            image="blog-7.jpg"
            title="What Curling Irons Are The Best Ones"
          />
        </div>

        <div class="col-span-12 sm:col-span-6 md:col-span-4">
          <Blog image="blog-8.jpg" title="Eternity Bands Do Last Forever" />
        </div>

        <div class="col-span-12 sm:col-span-6 md:col-span-4">
          <Blog image="blog-9.jpg" title="The Health Benefits Of Sunglasses" />
        </div>
      </div>
    </div>
  </div>
</template>

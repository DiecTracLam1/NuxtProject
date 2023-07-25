<template>
  <div>
    <Header />
    <main>
      <div class="bg-[#f6f6f6] h-[140px]">
        <div
          class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] px-[15px] mx-auto h-full"
        >
          <div class="flex flex-col justify-center h-full">
            <h4 class="text-2xl font-bold mb-2">Account</h4>
          </div>
        </div>
      </div>
      <div
        class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] w-full px-[15px] mx-auto mt-24"
      >
        <div class="grid grid-cols-12 sm:gap-[30px] gap-y-[32px] pb-[50px]">
          <NavBarUser />
          <div class="col-span-12 sm:col-span-9 md:col-span-9 xl:col-span-10">
            <slot />
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<template>
  <div>
    <Header />
    <div
      class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1170px] xl:max-w-[1170px] w-full px-[15px] mx-auto mt-24"
    >
      <div class="grid grid-cols-12 md:gap-[30px] gap-y-[30px] pb-[50px]">
        <NavBarUser />
        <slot />
      </div>
    </div>
    <Footer />
  </div>
</template>

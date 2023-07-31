<template>
  <div>
    <BreadCrum title="Shop" :pathList="['Shop']"/>
    <div
      class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] w-full px-[15px] mx-auto pt-[100px]"
    >
      <div class="grid grid-cols-12 gap-y-[50px] md:gap-[50px]">
        <div class="col-span-12 md:col-span-3">
          <NavBarShop />
        </div>

        <div class="col-span-12 md:col-span-9">
          <Shop />
        </div>
      </div>
    </div>
  </div>
</template>

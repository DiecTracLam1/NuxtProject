<template>
  <!-- <NavBarUser v-slot:navLeftUser/> -->
  <div class="col-span-10">
    <div class="border-[1px] px-[30px]">
      <div class="py-[18px] border-b-[1px]">
        <p class="m-0 text-lg">My Profile</p>
        <p class="m-0">Manage and protect your account</p>
      </div>
      <div class="flex pt-[30px] ">
        <form class="">
          <InputText/>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div class="pt-[30px]">
    <div class="flex items-center mb-7">
      <label class="text-blur-grey w-[20%] text-right" for=""
        >Current Password</label
      >
      <InputText
        name="currentPassword"
        type="password"
        class="flex-1 ml-5"
        size="xs"
      />
    </div>

    <div class="flex items-center mb-7">
      <label class="text-blur-grey w-[20%] text-right" for=""
        >New Password</label
      >
      <InputText
        name="newPassword"
        type="password"
        class="flex-1 ml-5 "
        size="xs"
      />
    </div>

    <div class="flex items-center mb-7">
      <label class="text-blur-grey w-[20%] text-right" for=""
        >Repeat Password</label
      >
      <InputText name="email" type="repeat" class="flex-1 ml-5" size="xs" />
    </div>

    <div class="flex items-center mb-7">
      <label class="w-[20%]" />
      <Button text="save" size="xs" class="ml-5" />
    </div>
  </div>
</template>

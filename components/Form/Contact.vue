<template>
  <form action="">
    <div class="grid grid-cols-12 gap-[30px]">
      <div class="col-span-12 md:col-span-6">
        <InputText name="name" placeholder="Name" />
      </div>
      <div class="col-span-12 md:col-span-6">
        <InputText name="email" placeholder="Email" />
      </div>
      <div class="col-span-12">
        <a-textarea :rows="6" placeholder="Message" />
      </div>
      <div class="col-span-12">
        <Button size="xl" text="Send message" />
      </div>
    </div>
  </form>
</template>

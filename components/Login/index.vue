<template>
  <div
    class="fixed top-full left-1/2 w-2/5 bg-white transition-all duration-500 text-start translate-x-[-50%] translate-y-[100%] peer-checked:top-1/2 peer-checked:translate-y-[-50%] opacity-0 z-20 peer-checked:block peer-checked:opacity-100"
  >
    <div class="relative text-center p-6 border-b-[1px] mb-3">
      <h1 class="text-lg m-0">Login</h1>
      <span
        @click="handleChangeOpenLogin(false)"
        class="absolute top-1/2 right-6 translate-y-[-50%] cursor-pointer text-xl"
      >
        <Icon name="humbleicons:times" />
      </span>
    </div>
    <Form/>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['closeLogin'])

function handleChangeOpenLogin(check : boolean){
    emit('closeLogin',check)
}

</script>
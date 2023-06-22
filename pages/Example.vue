<template>
    <div>
        {{ text }}
        <input v-model="text" type="text">
        <!-- {{ compu }} -->
    </div>
</template>
<script setup>
const text= ref('')
const compu = computed(()=>{
    console.log(text.value)
    return text.value
})
console.log(text.value)
</script>
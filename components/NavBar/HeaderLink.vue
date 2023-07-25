<template>
  <ul class="flex justify-around my-0">
    <li>
      <NuxtLink
        to="/"
        class="text-lg no-underline text-black active:underline hover:underline hover:cursor-pointer"
      >
        Home
      </NuxtLink>
    </li>
    <li class="group">
      <NuxtLink
        to="/shop"
        class="text-lg no-underline text-black hover:underline hover:cursor-pointer"
      >
        Shop
      </NuxtLink>
    </li>
    <li class="group">
      <NuxtLink
        to="/blog"
        class="text-lg no-underline text-black hover:underline hover:cursor-pointer"
      >
        Blog
      </NuxtLink>
    </li>
    <li class="group">
      <NuxtLink
        to="/contact"
        class="text-lg no-underline text-black hover:underline hover:cursor-pointer"
      >
        Contacts
      </NuxtLink>
    </li>
    <li class="group">
      <NuxtLink
        to="/about"
        class="text-lg no-underline text-black hover:underline hover:cursor-pointer"
      >
        About us
      </NuxtLink>
    </li>
  </ul>
</template>

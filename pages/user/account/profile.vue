<template>
  <div class="border-[1px] px-[30px]">
    <div class="py-[18px] border-b-[1px]">
      <p class="m-0 text-lg">My Profile</p>
      <p class="m-0">Manage and protect your account</p>
    </div>
    <FormAccount :user="user" />
  </div>
</template>
<script setup lang="ts">
import { User } from "model/user";

definePageMeta({
  layout: "custom",
});
const cookie = useCookie<any>("User");

const { data: user } = await useFetch<User>("/api/auth/user", {
  headers: { Authorization: `Bearer ${cookie.value.data.access_token}` },
});
</script>

import { useUserStore } from '../stores/user'

export default defineNuxtRouteMiddleware((to, from) => {
  console.log(useUserStore())
  if (from.fullPath === "/") return navigateTo("/");
});

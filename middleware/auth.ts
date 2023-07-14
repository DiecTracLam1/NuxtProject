import { useUserStore } from "../stores/user";

export default defineNuxtRouteMiddleware((to, from) => {
  const cookie = useCookie("User");
  console.log(cookie.value.data.access_token)
  const userStore = useUserStore();
  if (!cookie.value.data.access_token) {
    return navigateTo("/");
  }
});

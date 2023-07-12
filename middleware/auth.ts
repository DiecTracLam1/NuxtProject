import { useUserStore } from "../stores/user";

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore();
  console.log(userStore.$state.data.access_token)
  // if (!userStore.$state.data.access_token) {
  //   return navigateTo('/')
  // }
});

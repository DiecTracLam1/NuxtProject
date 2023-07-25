export default defineNuxtRouteMiddleware((to, from) => {
  const cookie:any = useCookie("User");
  if (!cookie.value?.data.access_token && to.path.includes("/user")) {
    return navigateTo("/");
  }
});

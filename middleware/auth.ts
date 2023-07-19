export default defineNuxtRouteMiddleware((to, from) => {
  const cookie:any = useCookie("User");
  if (!cookie.value.data.access_token) {
    return navigateTo("/");
  }
});

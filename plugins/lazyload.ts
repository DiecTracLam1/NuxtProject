import VueLazyload from "vue-lazyload";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueLazyload, {
    preLoad: 1,
    attempt: 1,
    loading:'/_nuxt/assets/images/loading.jpg'
  });
});

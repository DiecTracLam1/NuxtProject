import VueLazyload from "vue-lazyload";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueLazyload, {
    preLoad: 1,
    listenEvents: [ 'scroll' ],
    loading:'/_nuxt/assets/images/loading.jpg'
  });
});

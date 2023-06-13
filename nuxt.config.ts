// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: ["@/plugins/antd"],
  css: ["~/assets/css/tailwind.css"],
  modules: ["nuxt-icon", "nuxt-swiper"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});

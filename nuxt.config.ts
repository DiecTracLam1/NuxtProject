// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: ["@/plugins/antd", "@/plugins/lazyload"],
  css: ["@/assets/css/index.css"],
  modules: [
    "nuxt-icon",
    "@nuxtjs/tailwindcss",
    "nuxt-swiper",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "dayjs-nuxt",
    "@nuxt/image",
    "nuxt-mapbox",
  ],
  mapbox: {
    accessToken: process.env.MAP_API_TOKEN,
  },
  tailwindcss: {
    configPath: "./tailwind.config",
  },
  runtimeConfig: {
    jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
    cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
  },
});

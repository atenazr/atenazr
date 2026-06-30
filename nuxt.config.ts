import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  modules: ['nuxt-icons'],

  devtools: { enabled: true },

  css: [
    "~/assets/css/main.css"
  ],

  nitro: {
    preset: "static"
  },

  app: {
    baseURL: "/",
    buildAssetsDir: "_nuxt/"
  },

  vite: {
    plugins: [
      tailwindcss()
    ]
  }
});
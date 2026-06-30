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
    buildAssetsDir: "_nuxt/",
    head: {
      title: 'Fatemeh Zare', // default fallback title
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/33.png' },
      ],
    },
  },

  vite: {
    plugins: [
      tailwindcss()
    ]
  }
});
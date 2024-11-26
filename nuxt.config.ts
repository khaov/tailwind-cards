// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/eslint'],

  fonts: {
    families: [{ name: "Rubik", weights: [400, 500], styles: ["normal"], subsets: ["cyrillic"], provider: "google" }],
  },
})
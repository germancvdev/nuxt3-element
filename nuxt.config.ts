import { defineNuxtConfig } from 'nuxt'
import { env } from 'process'
const lifecycle = process.env.npm_lifecycle_event

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode', 'nuxt-windicss', '@pinia/nuxt'],
  runtimeConfig: {
    public: {
      BASE_URL: env.BASE_URL,
    },
  },

  build: {
    transpile:
      lifecycle === 'build' ? ['element-plus', '@amcharts'] : ['@amcharts'],
  },
  css: ['@/assets/scss/main.scss'],
  colorMode: {
    classSuffix: '',
  },

  windicss: {
    analyze: true,
  },
})

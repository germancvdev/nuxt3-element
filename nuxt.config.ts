import { defineNuxtConfig } from 'nuxt'
const lifecycle = process.env.npm_lifecycle_event

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode', 'nuxt-windicss'],
  build: {
    transpile:
      lifecycle === 'build'
        ? ['element-plus', '@amcharts/amcharts5']
        : ['@amcharts/amcharts5'],
  },
  css: ['@/assets/scss/main.scss'],
  colorMode: {
    classSuffix: '',
  },

  windicss: {
    analyze: true,
  },
})

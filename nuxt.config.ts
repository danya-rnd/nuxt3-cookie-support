import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseAPI: process.env.BASE_API || 'http://localhost:4000',
    },
  },
  modules: ['@nuxtjs-alt/proxy'],
  proxy: {
    '/api/v1/': {
      target: process.env.BASE_API || 'http://localhost:4000',
      changeOrigin: true,
    },
  },
})

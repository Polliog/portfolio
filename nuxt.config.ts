import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
      viewport: 'width=device-width, initial-scale=1'
    },
    css: [
        "~/assets/styles.scss",
    ],
    plugins: [{ src: "@/plugins/aos", mode: "client", ssr: false }],

})

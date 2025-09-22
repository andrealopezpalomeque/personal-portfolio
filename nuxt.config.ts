// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Enable SSG for static site generation
  nitro: {
    prerender: {
      routes: ['/']
    }
  },

  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    'unplugin-icons/nuxt',
    'dayjs-nuxt'
  ],

  // Unplugin Icons configuration
  unpluginIcons: {
    autoInstall: true,
  },

  // Google Fonts configuration
  googleFonts: {
    families: {
      Geist: [300, 400, 500, 600],
      'Geist+Mono': [400]
    },
    display: 'swap',
    preconnect: true,
    prefetch: true,
    preload: true
  },

  // Icons and components configuration
  components: [
    {
      path: '~/components',
      global: true
    },
    {
      path: '~/components/ui',
      prefix: 'Ui',
      global: true
    },
    {
      path: '~/components/sections',
      prefix: 'Sections',
      global: true
    }
  ],

  // Unplugin Icons configuration
  css: [],

  vite: {
    plugins: [],
    optimizeDeps: {
      include: []
    }
  },


  // Tailwind CSS configuration
  tailwindcss: {
    cssPath: '~/assets/css/main.css'
  },


  // TypeScript configuration
  typescript: {
    strict: false,
    typeCheck: false
  },




  // App configuration
  app: {
    head: {
      title: 'Andrea Victoria López Palomeque - Frontend Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Frontend Developer from Buenos Aires specializing in Vue.js, React, and modern web technologies. Available for freelance and full-time opportunities.' },
        { name: 'author', content: 'Andrea Victoria López Palomeque' },
        { property: 'og:title', content: 'Andrea Victoria López Palomeque - Frontend Developer' },
        { property: 'og:description', content: 'Frontend Developer from Buenos Aires specializing in Vue.js, React, and modern web technologies.' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Andrea Victoria López Palomeque - Frontend Developer' },
        { name: 'twitter:description', content: 'Frontend Developer from Buenos Aires specializing in Vue.js, React, and modern web technologies.' }
      ],
      link: [
        { rel: 'icon', type: 'image/jpeg', href: '/favicon-dark.jpg' }
      ]
    }
  }
})

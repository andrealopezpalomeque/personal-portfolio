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
    '@vueuse/nuxt',
    'unplugin-icons/nuxt',
    'dayjs-nuxt'
  ],

  // Unplugin Icons configuration
  unpluginIcons: {
    autoInstall: true,
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
      title: 'Personal Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Personal portfolio showcasing software development skills and projects' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})

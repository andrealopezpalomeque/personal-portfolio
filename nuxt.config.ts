// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Enable SSG for static site generation
  ssr: true,
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true
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
      'Instrument+Serif': [400],
      'DM+Sans': [400, 500, 600, 700]
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
      title: 'Andrea López Palomeque — Digital spaces for people who care about their craft',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'I build digital spaces for people who care deeply about their craft. Frontend developer and brand thinker based in Buenos Aires.' },
        { name: 'author', content: 'Andrea López Palomeque' },
        { property: 'og:title', content: 'Andrea López Palomeque — Digital spaces for people who care about their craft' },
        { property: 'og:description', content: 'I build digital spaces for people who care deeply about their craft. Frontend developer and brand thinker based in Buenos Aires.' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Andrea López Palomeque — Digital spaces for people who care about their craft' },
        { name: 'twitter:description', content: 'I build digital spaces for people who care deeply about their craft. Frontend developer and brand thinker based in Buenos Aires.' }
      ],
      link: [
        { rel: 'icon', type: 'image/jpeg', href: '/favicon-dark.jpg' }
      ]
    }
  }
})

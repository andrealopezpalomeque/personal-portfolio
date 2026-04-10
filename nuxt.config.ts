// https://nuxt.com/docs/api/configuration/nuxt-config
const ogImageUrl = `https://andrealopezpalomeque.dev/og-image.png?v=${Date.now()}`

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      ogImageUrl
    }
  },

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
    'dayjs-nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/i18n'
  ],

  i18n: {
    locales: [
      { code: 'en', file: 'en.json', name: 'English', language: 'en-US' },
      { code: 'es', file: 'es.json', name: 'Español', language: 'es-AR' },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: 'locales/',
    detectBrowserLanguage: false,
  },

  // Sitemap configuration
  site: {
    url: 'https://andrealopezpalomeque.dev'
  },

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
        // Open Graph
        { property: 'og:title', content: 'Andrea López Palomeque — Digital spaces for people who care about their craft' },
        { property: 'og:description', content: 'I build digital spaces for people who care deeply about their craft. Frontend developer and brand thinker based in Buenos Aires.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://andrealopezpalomeque.dev/' },
        { property: 'og:image', content: ogImageUrl },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Andrea López Palomeque — Frontend Developer & Brand Thinker' },
        { property: 'og:site_name', content: 'Andrea López Palomeque' },
        // Open Graph image type
        { property: 'og:image:type', content: 'image/png' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@pipilopezpalome' },
        { name: 'twitter:creator', content: '@pipilopezpalome' },
        { name: 'twitter:title', content: 'Andrea López Palomeque — Digital spaces for people who care' },
        { name: 'twitter:description', content: 'I build digital spaces for people who care deeply about their craft. Frontend developer and brand thinker based in Buenos Aires.' },
        { name: 'twitter:image', content: ogImageUrl },
        { name: 'twitter:image:alt', content: 'Andrea López Palomeque — Frontend Developer & Brand Thinker' },
        // Additional SEO
        { name: 'theme-color', content: '#F5F2EE' },
        { name: 'robots', content: 'index, follow' }
      ],
      script: [
        {
          // Redirect any non-canonical domain (e.g. .web.app) to the primary domain
          // while preserving the full pathname.
          innerHTML: `if(location.hostname!=="andrealopezpalomeque.dev"){location.replace("https://andrealopezpalomeque.dev"+location.pathname+location.search);}`,
          tagPriority: 'critical'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/jpeg', href: '/favicon-dark.jpg' }
      ]
    }
  }
})

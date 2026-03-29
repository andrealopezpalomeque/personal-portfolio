# i18n Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add English/Spanish bilingual support to the portfolio using `@nuxtjs/i18n` with prefix_except_default strategy.

**Architecture:** Install `@nuxtjs/i18n`, extract all hardcoded strings into locale JSON files (en.json / es.json), replace template text with `$t()` calls, and add an inline EN/ES switcher to both navs. English stays at root URLs, Spanish at `/es/`.

**Tech Stack:** `@nuxtjs/i18n` v9+, Nuxt 4, Vue 3

---

### Task 1: Install @nuxtjs/i18n and configure Nuxt

**Files:**
- Modify: `package.json`
- Modify: `nuxt.config.ts`

- [ ] **Step 1: Install the module**

Run:
```bash
yarn add @nuxtjs/i18n
```

- [ ] **Step 2: Add i18n module and config to nuxt.config.ts**

Add `'@nuxtjs/i18n'` to the modules array (after existing modules). Add the i18n configuration block:

```ts
// In the modules array, add:
'@nuxtjs/i18n'

// Add this top-level config block:
i18n: {
  locales: [
    { code: 'en', file: 'en.json', name: 'English' },
    { code: 'es', file: 'es.json', name: 'Español' },
  ],
  defaultLocale: 'en',
  strategy: 'prefix_except_default',
  lazy: true,
  langDir: 'locales/',
  detectBrowserLanguage: false,
},
```

- [ ] **Step 3: Create empty locale files so Nuxt can boot**

Create `locales/en.json`:
```json
{}
```

Create `locales/es.json`:
```json
{}
```

- [ ] **Step 4: Verify dev server starts**

Run:
```bash
yarn dev
```
Expected: Dev server boots without errors. Site works identically to before.

- [ ] **Step 5: Commit**

```bash
git add package.json yarn.lock nuxt.config.ts locales/
git commit -m "feat: install @nuxtjs/i18n and configure prefix_except_default strategy"
```

---

### Task 2: Create English locale file with all strings

**Files:**
- Create: `locales/en.json`

- [ ] **Step 1: Write the complete English locale file**

Extract every hardcoded string from all components and pages into `locales/en.json`:

```json
{
  "nav": {
    "work": "Work",
    "about": "About",
    "contact": "Contact",
    "recruiters": "For recruiters"
  },
  "hero": {
    "name": "Andrea López Palomeque",
    "statement1": "I build digital spaces for people who care deeply about their craft.",
    "statement2": "Architects, engineers, makers — your work speaks for itself in person.",
    "statement3": "Online, it deserves the same intention.",
    "label": "Frontend Developer · Buenos Aires",
    "scroll": "scroll"
  },
  "featuredWork": {
    "sectionLabel": "Selected Work",
    "visit": "Visit",
    "elGranPeon": {
      "description": "Full brand identity and e-commerce platform for an Argentine leather goods brand — from visual language to a store that feels as crafted as the product itself."
    },
    "textTheCheck": {
      "description": "Product design and development for an AI-powered WhatsApp bot that reads receipts and splits expenses — turning a messy problem into a clean, instant interaction."
    }
  },
  "manifesto": {
    "line1": "Your brand should feel like a natural extension of ",
    "line1Emphasis": "who you are.",
    "line2": "Not a template. Not a grid of Instagram posts.",
    "line3": "Something with ",
    "line3Emphasis": "soul.",
    "supporting": "I help independent professionals — architects, engineers, makers — show the world how serious and beautiful their work really is."
  },
  "about": {
    "sectionLabel": "About",
    "bio1": "I'm a frontend developer based in Buenos Aires with 4+ years building for startups and independent brands. I work with Vue, Nuxt, TypeScript, and Tailwind — but what sets me apart is that I think like a designer and care like a founder.",
    "bio2Before": "I've built e-commerce platforms, AI-powered WhatsApp bots, and brand identities from scratch. Currently co-founding",
    "bio2Link": "WiseUtils",
    "bio2After": "with Imanol, building AI-first solutions for small businesses."
  },
  "contact": {
    "heading": "Let's talk",
    "subheading": "Have a project, a brand, or an idea? I'd love to hear about it.",
    "footer": "© 2026 Andrea López Palomeque"
  },
  "dev": {
    "backLink": "Andrea López Palomeque",
    "downloadResume": "Download Resume",
    "pageTitle": "Developer Experience",
    "pageSubtitle": "Work history, tech stack, and projects with code.",
    "experienceLabel": "Experience",
    "projectsLabel": "Projects",
    "skillsLabel": "Skills & Tools",
    "codeLink": "Code",
    "liveLink": "Live",
    "footer": "© 2026 Andrea López Palomeque",
    "experience": {
      "wiseutils": {
        "year": "2025 — Present",
        "role": "Founder & Developer",
        "company": "WiseUtils",
        "description": "Co-founded a software company specializing in AI-first solutions for small and medium-sized businesses. Building WhatsApp bots, e-commerce platforms, inventory management systems, RAG-powered search, and intelligent support agents."
      },
      "meowtel": {
        "year": "2024 — 2025",
        "role": "Frontend Developer",
        "company": "Meowtel",
        "description": "Owned frontend web development, building and iterating on key user-facing sections. Contributed to A/B testing, implemented analytics and tracking, and optimized Core Web Vitals. Participated in migration from Nuxt 3 SPA to PHP/Twig/Alpine.js for performance and SEO."
      },
      "asteroid": {
        "year": "2024",
        "role": "FullStack Developer",
        "company": "Asteroid Technologies",
        "description": "Web development using React.js, Next.js, Firebase. Collaborated with UX/UI designers on company website and new projects including Hablalo back office."
      },
      "telco": {
        "year": "2023",
        "role": "Frontend Developer",
        "company": "TelCo SAPEM",
        "description": "Developed Wee! Pagos payment app and Wee!pas ticketing app using Vue.js. Built Recolector mobile app from scratch in React Native."
      }
    },
    "projects": {
      "textTheCheck": {
        "description": "WhatsApp-first financial companion with dual modes: collaborative trip expense tracking and personal bill tracking. Built with WhatsApp Business API and Gemini AI for Argentine Spanish parsing."
      },
      "gastoObra": {
        "description": "Construction expense management platform. Users log expenses via WhatsApp using natural language parsed by Gemini AI, with a web dashboard for real-time insights and financial reports."
      },
      "elGranPeon": {
        "description": "Full brand identity and e-commerce platform for an Argentine artisanal goods brand. Customer-facing storefront plus complete back-office for inventory management and stock control."
      },
      "cruzarDeportes": {
        "description": "E-commerce platform for sports jerseys and apparel. Features product catalog, shopping cart, advanced search & filtering, and admin management tools."
      },
      "instalarPro": {
        "description": "Platform connecting AC technicians with clients in Argentina/LATAM. Three interconnected domains: technician landing pages, back-office dashboard, and client booking."
      },
      "roadToToefl": {
        "description": "TOEFL exam prep app with word completion, reading comprehension, listening exercises, speaking prompts, and writing tasks."
      }
    },
    "skills": {
      "frontend": "Frontend",
      "backend": "Backend & Data",
      "tools": "Tools & Other"
    }
  },
  "seo": {
    "homeTitle": "Andrea López Palomeque — Digital spaces for people who care about their craft",
    "homeDescription": "I build digital spaces for people who care deeply about their craft. Frontend developer and brand thinker based in Buenos Aires.",
    "homeOgTitle": "Andrea López Palomeque — Digital spaces for people who care about their craft",
    "homeTwitterTitle": "Andrea López Palomeque — Digital spaces for people who care",
    "devTitle": "Andrea López Palomeque — Developer Experience",
    "devDescription": "Technical background, work history, and projects by Andrea López Palomeque. Vue.js, Nuxt, TypeScript, Tailwind CSS.",
    "ogImageAlt": "Andrea López Palomeque — Frontend Developer & Brand Thinker"
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add locales/en.json
git commit -m "feat: add complete English locale file with all extracted strings"
```

---

### Task 3: Create Spanish locale file

**Files:**
- Create: `locales/es.json`

- [ ] **Step 1: Write the complete Spanish locale file**

Argentine Spanish (voseo), adapted editorial voice — not literal translations. Tech terms, company names, and product names stay in English.

```json
{
  "nav": {
    "work": "Trabajo",
    "about": "Sobre mí",
    "contact": "Contacto",
    "recruiters": "Para reclutadores"
  },
  "hero": {
    "name": "Andrea López Palomeque",
    "statement1": "Creo espacios digitales para quienes cuidan cada detalle de su oficio.",
    "statement2": "Arquitectos, ingenieros, creadores — tu trabajo habla por sí solo en persona.",
    "statement3": "Online, merece la misma intención.",
    "label": "Frontend Developer · Buenos Aires",
    "scroll": "scroll"
  },
  "featuredWork": {
    "sectionLabel": "Trabajo Seleccionado",
    "visit": "Visitar",
    "elGranPeon": {
      "description": "Identidad de marca completa y plataforma e-commerce para una marca argentina de artículos de cuero — desde el lenguaje visual hasta una tienda que se siente tan cuidada como el producto."
    },
    "textTheCheck": {
      "description": "Diseño de producto y desarrollo de un bot de WhatsApp con IA que lee tickets y divide gastos — convirtiendo un problema engorroso en una interacción limpia e instantánea."
    }
  },
  "manifesto": {
    "line1": "Tu marca debería sentirse como una extensión natural de ",
    "line1Emphasis": "quien sos.",
    "line2": "No una plantilla. No una grilla de posts de Instagram.",
    "line3": "Algo con ",
    "line3Emphasis": "alma.",
    "supporting": "Ayudo a profesionales independientes — arquitectos, ingenieros, creadores — a mostrarle al mundo lo serio y hermoso que es su trabajo."
  },
  "about": {
    "sectionLabel": "Sobre mí",
    "bio1": "Soy desarrolladora frontend en Buenos Aires con más de 4 años construyendo para startups y marcas independientes. Trabajo con Vue, Nuxt, TypeScript y Tailwind — pero lo que me diferencia es que pienso como diseñadora y me involucro como fundadora.",
    "bio2Before": "Construí plataformas e-commerce, bots de WhatsApp con IA e identidades de marca desde cero. Actualmente co-fundando",
    "bio2Link": "WiseUtils",
    "bio2After": "con Imanol, creando soluciones AI-first para pequeñas empresas."
  },
  "contact": {
    "heading": "Hablemos",
    "subheading": "¿Tenés un proyecto, una marca o una idea? Me encantaría escucharte.",
    "footer": "© 2026 Andrea López Palomeque"
  },
  "dev": {
    "backLink": "Andrea López Palomeque",
    "downloadResume": "Descargar CV",
    "pageTitle": "Experiencia Profesional",
    "pageSubtitle": "Historial laboral, tecnologías y proyectos con código.",
    "experienceLabel": "Experiencia",
    "projectsLabel": "Proyectos",
    "skillsLabel": "Habilidades y Herramientas",
    "codeLink": "Código",
    "liveLink": "Demo",
    "footer": "© 2026 Andrea López Palomeque",
    "experience": {
      "wiseutils": {
        "year": "2025 — Presente",
        "role": "Founder & Developer",
        "company": "WiseUtils",
        "description": "Co-fundé una empresa de software especializada en soluciones AI-first para pequeñas y medianas empresas. Desarrollo de bots de WhatsApp, plataformas e-commerce, sistemas de gestión de inventario, búsqueda con RAG e agentes de soporte inteligentes."
      },
      "meowtel": {
        "year": "2024 — 2025",
        "role": "Frontend Developer",
        "company": "Meowtel",
        "description": "Responsable del desarrollo frontend web, construyendo e iterando secciones clave para el usuario. Contribuí en A/B testing, implementé analytics y tracking, y optimicé Core Web Vitals. Participé en la migración de Nuxt 3 SPA a PHP/Twig/Alpine.js para performance y SEO."
      },
      "asteroid": {
        "year": "2024",
        "role": "FullStack Developer",
        "company": "Asteroid Technologies",
        "description": "Desarrollo web con React.js, Next.js, Firebase. Colaboré con diseñadores UX/UI en el sitio web de la empresa y nuevos proyectos incluyendo el back office de Hablalo."
      },
      "telco": {
        "year": "2023",
        "role": "Frontend Developer",
        "company": "TelCo SAPEM",
        "description": "Desarrollé la app de pagos Wee! Pagos y la app de ticketing Wee!pas usando Vue.js. Construí la app móvil Recolector desde cero en React Native."
      }
    },
    "projects": {
      "textTheCheck": {
        "description": "Compañero financiero WhatsApp-first con dos modos: seguimiento colaborativo de gastos de viaje y seguimiento personal de cuentas. Construido con WhatsApp Business API y Gemini AI para parseo en español argentino."
      },
      "gastoObra": {
        "description": "Plataforma de gestión de gastos de obra. Los usuarios registran gastos por WhatsApp usando lenguaje natural parseado por Gemini AI, con un dashboard web para insights en tiempo real e informes financieros."
      },
      "elGranPeon": {
        "description": "Identidad de marca completa y plataforma e-commerce para una marca argentina de artículos artesanales. Tienda para clientes más back-office completo para gestión de inventario y control de stock."
      },
      "cruzarDeportes": {
        "description": "Plataforma e-commerce de camisetas y ropa deportiva. Catálogo de productos, carrito de compras, búsqueda y filtrado avanzado, y herramientas de administración."
      },
      "instalarPro": {
        "description": "Plataforma que conecta técnicos de aire acondicionado con clientes en Argentina/LATAM. Tres dominios interconectados: landing pages de técnicos, dashboard de back-office y reservas de clientes."
      },
      "roadToToefl": {
        "description": "App de preparación para el examen TOEFL con completar palabras, comprensión lectora, ejercicios de listening, prompts de speaking y tareas de writing."
      }
    },
    "skills": {
      "frontend": "Frontend",
      "backend": "Backend y Datos",
      "tools": "Herramientas y Otros"
    }
  },
  "seo": {
    "homeTitle": "Andrea López Palomeque — Espacios digitales para quienes cuidan su oficio",
    "homeDescription": "Creo espacios digitales para quienes cuidan cada detalle de su oficio. Desarrolladora frontend y pensadora de marca en Buenos Aires.",
    "homeOgTitle": "Andrea López Palomeque — Espacios digitales para quienes cuidan su oficio",
    "homeTwitterTitle": "Andrea López Palomeque — Espacios digitales para quienes cuidan su oficio",
    "devTitle": "Andrea López Palomeque — Experiencia Profesional",
    "devDescription": "Trayectoria técnica, historial laboral y proyectos de Andrea López Palomeque. Vue.js, Nuxt, TypeScript, Tailwind CSS.",
    "ogImageAlt": "Andrea López Palomeque — Frontend Developer & Brand Thinker"
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add locales/es.json
git commit -m "feat: add Spanish locale file with Argentine Spanish translations"
```

---

### Task 4: Wire up Hero.vue with i18n

**Files:**
- Modify: `components/sections/Hero.vue`

- [ ] **Step 1: Replace hardcoded text with $t() calls**

Update the template to use `$t()` for all translatable strings. Add the language switcher inline in the nav. Use `useLocalePath` and `useSwitchLocalePath` composables from `@nuxtjs/i18n`.

Replace the full `<template>` and `<script setup>` of `Hero.vue` with:

```vue
<template>
  <section id="hero" class="min-h-screen flex flex-col px-6 md:px-16 lg:px-24">
    <!-- Navigation -->
    <nav class="flex justify-center md:justify-end items-center gap-4 sm:gap-6 md:gap-8 pt-8 md:pt-10 animate-hero-1 flex-wrap">
      <a
        v-for="link in navLinks"
        :key="link.key"
        :href="link.href"
        class="font-sans text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-text-muted hover:text-text-primary transition-colors duration-300 whitespace-nowrap"
      >
        {{ $t(link.key) }}
      </a>

      <!-- Language switcher -->
      <span class="w-px h-3.5 bg-divider"></span>
      <div class="flex items-center gap-2">
        <NuxtLink
          :to="switchLocalePath('en')"
          class="font-sans text-[11px] tracking-[0.06em] uppercase transition-colors duration-300"
          :class="locale === 'en' ? 'text-text-primary font-semibold' : 'text-text-muted hover:text-text-primary'"
        >
          EN
        </NuxtLink>
        <NuxtLink
          :to="switchLocalePath('es')"
          class="font-sans text-[11px] tracking-[0.06em] uppercase transition-colors duration-300"
          :class="locale === 'es' ? 'text-text-primary font-semibold' : 'text-text-muted hover:text-text-primary'"
        >
          ES
        </NuxtLink>
      </div>
    </nav>

    <!-- Main content — positioned at golden ratio (roughly 38% from top) -->
    <div class="flex-1 flex flex-col justify-center" style="padding-bottom: 12vh;">
      <!-- Name -->
      <h1
        class="font-serif text-text-primary leading-[1.05] animate-hero-1"
        style="font-size: clamp(2.75rem, 8vw, 7.5rem);"
      >
        {{ $t('hero.name') }}
      </h1>

      <!-- Statement -->
      <p class="font-sans text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl mt-6 md:mt-8 animate-hero-2">
        {{ $t('hero.statement1') }}
        <br class="hidden md:block" />
        {{ $t('hero.statement2') }}
        <br class="hidden md:block" />
        {{ $t('hero.statement3') }}
      </p>

      <!-- Location label -->
      <p class="font-sans text-text-muted text-xs md:text-sm uppercase tracking-[0.2em] mt-6 animate-hero-3">
        {{ $t('hero.label') }}
      </p>
    </div>

    <!-- Scroll indicator -->
    <div class="flex justify-center pb-8 md:pb-12 animate-hero-4">
      <span class="text-text-muted text-xs uppercase tracking-[0.3em] animate-scroll-pulse">
        {{ $t('hero.scroll') }}
      </span>
    </div>
  </section>
</template>

<script setup>
defineOptions({
  name: 'SectionsHero'
})

const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()

const navLinks = [
  { key: 'nav.work', href: '#work' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.contact', href: '#contact' },
  { key: 'nav.recruiters', href: localePath('/dev') },
]
</script>
```

Note: The "For recruiters" link now uses `localePath('/dev')` so it goes to `/es/dev` when in Spanish.

- [ ] **Step 2: Verify in browser**

Run:
```bash
yarn dev
```
Check `http://localhost:3000` — should look identical. Check `http://localhost:3000/es/` — should show Spanish nav + hero. Click EN/ES switcher to toggle.

- [ ] **Step 3: Commit**

```bash
git add components/sections/Hero.vue
git commit -m "feat: wire Hero.vue with i18n and add language switcher"
```

---

### Task 5: Wire up FeaturedWork.vue with i18n

**Files:**
- Modify: `components/sections/FeaturedWork.vue`

- [ ] **Step 1: Replace hardcoded text with $t() calls**

Update the projects array to use `$t()` for descriptions. Titles and URLs stay hardcoded (they're product names).

In the `<script setup>`, replace the `projects` array with a computed:

```js
const { t } = useI18n()

const projects = computed(() => [
  {
    slug: 'el-gran-peon',
    title: 'El Gran Peón',
    description: t('featuredWork.elGranPeon.description'),
    image: '/assets/images/el-gran-peon.png',
    imageWebp: '/assets/images/el-gran-peon.webp',
    url: 'https://elgranpeon.com',
  },
  {
    slug: 'text-the-check',
    title: 'Text the Check',
    description: t('featuredWork.textTheCheck.description'),
    image: '/assets/images/text-the-check.png',
    imageWebp: '/assets/images/text-the-check.webp',
    url: 'https://textthecheck.app',
  },
])
```

In the template, replace:
- `Selected Work` → `{{ $t('featuredWork.sectionLabel') }}`
- `Visit` → `{{ $t('featuredWork.visit') }}`

- [ ] **Step 2: Verify both languages show correct descriptions**

- [ ] **Step 3: Commit**

```bash
git add components/sections/FeaturedWork.vue
git commit -m "feat: wire FeaturedWork.vue with i18n translations"
```

---

### Task 6: Wire up Manifesto.vue with i18n

**Files:**
- Modify: `components/sections/Manifesto.vue`

- [ ] **Step 1: Replace hardcoded text with $t() calls**

Replace the manifesto template spans:

```html
<span class="text-text-primary">{{ $t('manifesto.line1') }}</span>
<span class="text-text-muted italic">{{ $t('manifesto.line1Emphasis') }}</span>
<br />
<span class="text-text-primary">{{ $t('manifesto.line2') }}</span>
<br />
<span class="text-text-secondary">{{ $t('manifesto.line3') }}</span>
<span class="text-text-primary">{{ $t('manifesto.line3Emphasis') }}</span>
```

Replace the supporting line:
```html
{{ $t('manifesto.supporting') }}
```

- [ ] **Step 2: Verify both languages**

- [ ] **Step 3: Commit**

```bash
git add components/sections/Manifesto.vue
git commit -m "feat: wire Manifesto.vue with i18n translations"
```

---

### Task 7: Wire up About.vue with i18n

**Files:**
- Modify: `components/sections/About.vue`

- [ ] **Step 1: Replace hardcoded text with $t() calls**

Replace:
- `About` → `{{ $t('about.sectionLabel') }}`
- First bio paragraph → `{{ $t('about.bio1') }}`
- Second bio paragraph: needs to be split around the WiseUtils link:

```html
<p ...>
  {{ $t('about.bio2Before') }}
  <a href="https://wiseutils.com" target="_blank" rel="noopener noreferrer"
    class="text-text-primary underline underline-offset-4 decoration-divider hover:decoration-text-muted transition-colors duration-300"
  > {{ $t('about.bio2Link') }}</a>
  {{ $t('about.bio2After') }}
</p>
```

- [ ] **Step 2: Verify both languages**

- [ ] **Step 3: Commit**

```bash
git add components/sections/About.vue
git commit -m "feat: wire About.vue with i18n translations"
```

---

### Task 8: Wire up Contact.vue with i18n

**Files:**
- Modify: `components/sections/Contact.vue`

- [ ] **Step 1: Replace hardcoded text with $t() calls**

Replace:
- `Let's talk` → `{{ $t('contact.heading') }}`
- Subheading → `{{ $t('contact.subheading') }}`
- Footer → `{{ $t('contact.footer') }}`

Email address and social links (GitHub, LinkedIn) stay hardcoded — they're not translatable.

- [ ] **Step 2: Verify both languages**

- [ ] **Step 3: Commit**

```bash
git add components/sections/Contact.vue
git commit -m "feat: wire Contact.vue with i18n translations"
```

---

### Task 9: Wire up pages/index.vue SEO meta with i18n

**Files:**
- Modify: `pages/index.vue`

- [ ] **Step 1: Update useSeoMeta to use translated strings**

Replace the `useSeoMeta()` block with a reactive version using `useI18n()`:

```js
const { t } = useI18n()
const { ogImageUrl } = useRuntimeConfig().public

useSeoMeta({
  title: () => t('seo.homeTitle'),
  ogTitle: () => t('seo.homeOgTitle'),
  description: () => t('seo.homeDescription'),
  ogDescription: () => t('seo.homeDescription'),
  ogImage: ogImageUrl,
  ogImageType: 'image/png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterCard: 'summary_large_image',
  twitterSite: '@pipilopezpalome',
  twitterCreator: '@pipilopezpalome',
  twitterTitle: () => t('seo.homeTwitterTitle'),
  twitterDescription: () => t('seo.homeDescription'),
  twitterImage: ogImageUrl,
})
```

Note: Using arrow functions so the meta reacts to locale changes.

- [ ] **Step 2: Verify page title changes when switching language**

- [ ] **Step 3: Commit**

```bash
git add pages/index.vue
git commit -m "feat: wire homepage SEO meta with i18n"
```

---

### Task 10: Wire up pages/dev.vue with i18n

**Files:**
- Modify: `pages/dev.vue`

- [ ] **Step 1: Replace all hardcoded text with $t() calls**

This is the largest file. Replace:

**Nav:**
- `← Andrea López Palomeque` → `← {{ $t('dev.backLink') }}`
- `Download Resume ↓` → `{{ $t('dev.downloadResume') }} ↓`
- Back link: change `to="/"` to `:to="localePath('/')"` using `useLocalePath()`

**Page title section:**
- `Developer Experience` → `{{ $t('dev.pageTitle') }}`
- `Work history, tech stack, and projects with code.` → `{{ $t('dev.pageSubtitle') }}`

**Section labels:**
- `Experience` → `{{ $t('dev.experienceLabel') }}`
- `Projects` → `{{ $t('dev.projectsLabel') }}`
- `Skills & Tools` → `{{ $t('dev.skillsLabel') }}`

**Experience data** — convert to computed using `t()`:

```js
const { t, locale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const experience = computed(() => [
  {
    year: t('dev.experience.wiseutils.year'),
    role: t('dev.experience.wiseutils.role'),
    company: t('dev.experience.wiseutils.company'),
    url: 'https://wiseutils.com',
    description: t('dev.experience.wiseutils.description'),
    tech: ['Vue.js', 'Nuxt', 'Node.js', 'AI Integration', 'WhatsApp API', 'Firebase'],
  },
  {
    year: t('dev.experience.meowtel.year'),
    role: t('dev.experience.meowtel.role'),
    company: t('dev.experience.meowtel.company'),
    description: t('dev.experience.meowtel.description'),
    tech: ['Vue.js', 'Alpine.js', 'Tailwind CSS', 'PostHog', 'A/B Testing', 'CRO'],
  },
  {
    year: t('dev.experience.asteroid.year'),
    role: t('dev.experience.asteroid.role'),
    company: t('dev.experience.asteroid.company'),
    description: t('dev.experience.asteroid.description'),
    tech: ['React', 'Next.js', 'Firebase', 'Tailwind CSS'],
  },
  {
    year: t('dev.experience.telco.year'),
    role: t('dev.experience.telco.role'),
    company: t('dev.experience.telco.company'),
    description: t('dev.experience.telco.description'),
    tech: ['Vue.js', 'React Native', 'Vuetify', 'Pinia'],
  },
])
```

**Projects data** — convert to computed using `t()`:

```js
const projects = computed(() => [
  {
    id: '1',
    title: 'Text the Check',
    description: t('dev.projects.textTheCheck.description'),
    technologies: ['Nuxt.js', 'Vue 3', 'Tailwind CSS', 'Node.js', 'Express', 'Firebase', 'WhatsApp API', 'TypeScript'],
    githubUrl: 'https://github.com/andrealopezpalomeque/text-the-check',
    liveUrl: 'https://textthecheck.app',
    completedDate: '2025-12',
  },
  {
    id: '6',
    title: 'Gasto Obra',
    description: t('dev.projects.gastoObra.description'),
    technologies: ['Nuxt 3', 'Vue 3', 'Tailwind CSS', 'Express.js', 'Firebase', 'WhatsApp Bot', 'Gemini AI'],
    githubUrl: 'https://github.com/imanolcorimayo/gasto-obra',
    liveUrl: 'https://gastoobra.wiseutils.com/',
    completedDate: '2026-02',
  },
  {
    id: '2',
    title: 'El Gran Peón',
    description: t('dev.projects.elGranPeon.description'),
    technologies: ['Nuxt.js', 'Vue 3', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Express', 'Firebase'],
    githubUrl: 'https://github.com/andrealopezpalomeque/el-gran-peon',
    liveUrl: 'https://elgranpeon.com',
    completedDate: '2026-02',
  },
  {
    id: '3',
    title: 'Cruzar Deportes',
    description: t('dev.projects.cruzarDeportes.description'),
    technologies: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'Pinia', 'Firebase'],
    githubUrl: 'https://github.com/andrealopezpalomeque/cruzar-deportes/',
    liveUrl: 'https://deportes-cruzar.web.app/',
    completedDate: '2025-08',
  },
  {
    id: '4',
    title: 'InstalarPro',
    description: t('dev.projects.instalarPro.description'),
    technologies: ['Vue.js', 'TypeScript', 'Nuxt 3', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/imanolcorimayo/instalapro',
    liveUrl: 'https://instalapro-back-office.web.app/',
    completedDate: '2025-07',
  },
  {
    id: '5',
    title: 'Road to TOEFL',
    description: t('dev.projects.roadToToefl.description'),
    technologies: ['Vue.js', 'Nuxt 3', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    githubUrl: 'https://github.com/andrealopezpalomeque/road-2-toefl',
    liveUrl: 'https://road-2-toefl.web.app/',
    completedDate: '2025-11',
  },
])
```

**Skills data** — convert to computed:

```js
const skills = computed(() => [
  {
    name: t('dev.skills.frontend'),
    items: ['Vue.js', 'Nuxt', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'Pinia', 'Alpine.js'],
  },
  {
    name: t('dev.skills.backend'),
    items: ['Node.js', 'Express', 'Firebase', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Python'],
  },
  {
    name: t('dev.skills.tools'),
    items: ['Git', 'Figma', 'Postman', 'Vercel', 'Render', 'AI Integration', 'WhatsApp API', 'A/B Testing', 'PostHog'],
  },
])
```

**formatDate** — update to use locale-aware formatting:

```js
const formatDate = (dateString) => {
  const [year, month] = dateString.split('-')
  const date = new Date(parseInt(year), parseInt(month) - 1)
  return date.toLocaleDateString(locale.value === 'es' ? 'es-AR' : 'en-US', { year: 'numeric', month: 'short' })
}
```

**Project links:**
- `Code →` → `{{ $t('dev.codeLink') }} →`
- `Live →` → `{{ $t('dev.liveLink') }} →`

**Footer:** `© 2026 Andrea López Palomeque` → `{{ $t('dev.footer') }}`

**SEO meta** — update to use translated strings:

```js
useSeoMeta({
  title: () => t('seo.devTitle'),
  ogTitle: () => t('seo.devTitle'),
  description: () => t('seo.devDescription'),
  ogDescription: () => t('seo.devDescription'),
  ogImage: ogImageUrl,
  ogImageType: 'image/png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterCard: 'summary_large_image',
  twitterSite: '@pipilopezpalome',
  twitterCreator: '@pipilopezpalome',
  twitterTitle: () => t('seo.devTitle'),
  twitterDescription: () => t('seo.devDescription'),
  twitterImage: ogImageUrl,
})
```

**Add language switcher to dev nav** — add after the "Download Resume" link:

```html
<!-- Language switcher -->
<div class="flex items-center gap-2 ml-4">
  <span class="w-px h-3.5 bg-divider"></span>
  <NuxtLink
    :to="switchLocalePath('en')"
    class="font-sans text-[11px] tracking-[0.06em] uppercase transition-colors duration-300"
    :class="locale === 'en' ? 'text-text-primary font-semibold' : 'text-text-muted hover:text-text-primary'"
  >EN</NuxtLink>
  <NuxtLink
    :to="switchLocalePath('es')"
    class="font-sans text-[11px] tracking-[0.06em] uppercase transition-colors duration-300"
    :class="locale === 'es' ? 'text-text-primary font-semibold' : 'text-text-muted hover:text-text-primary'"
  >ES</NuxtLink>
</div>
```

- [ ] **Step 2: Verify /dev and /es/dev both render correctly**

- [ ] **Step 3: Commit**

```bash
git add pages/dev.vue
git commit -m "feat: wire dev page with i18n translations and language switcher"
```

---

### Task 11: Update nuxt.config.ts global head meta

**Files:**
- Modify: `nuxt.config.ts`

- [ ] **Step 1: Simplify global head meta**

The page-level `useSeoMeta()` calls handle per-locale meta. The global head in `nuxt.config.ts` should only contain non-translatable meta (charset, viewport, theme-color, favicon, etc.) and set sensible English defaults for the OG/Twitter tags.

No changes needed to the actual global meta values since they already have English defaults and the per-page `useSeoMeta()` overrides them. The i18n module will automatically:
- Set `<html lang="en">` or `<html lang="es">`
- Add `<link rel="alternate" hreflang="en" ...>` and `<link rel="alternate" hreflang="es" ...>` tags

However, we should remove the hardcoded `canonical` link since the i18n module handles this per-locale:

Remove from nuxt.config.ts `app.head.link`:
```ts
{ rel: 'canonical', href: 'https://andrealopezpalomeque.dev/' }
```

And add `og:locale:alternate` support is handled automatically by the module.

- [ ] **Step 2: Verify the generated HTML has correct lang attribute and hreflang links**

Run `yarn dev`, visit both `/` and `/es/`, inspect the `<html>` tag and `<head>` for correct `lang` attribute and hreflang alternate links.

- [ ] **Step 3: Commit**

```bash
git add nuxt.config.ts
git commit -m "feat: clean up global head meta for i18n compatibility"
```

---

### Task 12: Test static generation

**Files:** None (verification only)

- [ ] **Step 1: Run yarn generate**

```bash
yarn generate
```

Expected: Generates pages for both locales:
- `.output/public/index.html` (English homepage)
- `.output/public/dev/index.html` (English dev)
- `.output/public/es/index.html` (Spanish homepage)
- `.output/public/es/dev/index.html` (Spanish dev)

- [ ] **Step 2: Verify generated files exist**

```bash
ls -la .output/public/index.html .output/public/dev/index.html .output/public/es/index.html .output/public/es/dev/index.html
```

- [ ] **Step 3: Preview the generated site**

```bash
yarn preview
```

Visit all 4 URLs, verify content renders in correct language, switcher works.

- [ ] **Step 4: Commit any fixes if needed**

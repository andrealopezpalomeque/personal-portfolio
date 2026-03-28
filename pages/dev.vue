<template>
  <div class="px-6 md:px-16 lg:px-24 pb-14">
    <!-- Header -->
    <nav class="flex items-center justify-between pt-8 md:pt-10 mb-20 md:mb-28">
      <NuxtLink
        to="/"
        class="font-sans text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-text-muted hover:text-text-primary transition-colors duration-300"
      >
        &larr; Andrea López Palomeque
      </NuxtLink>
      <a
        href="/resume/Andrea_Lopez_Palomeque_Resume.pdf"
        target="_blank"
        class="font-sans text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-accent hover:text-text-primary transition-colors duration-300"
      >
        Download Resume &darr;
      </a>
    </nav>

    <!-- Page title -->
    <div class="mb-16 md:mb-24">
      <h1
        class="font-serif text-text-primary leading-[1.05] animate-hero-1"
        style="font-size: clamp(2.25rem, 5vw, 4rem);"
      >
        Developer Experience
      </h1>
      <p class="font-sans text-text-secondary text-base md:text-lg leading-relaxed max-w-xl mt-4 animate-hero-2">
        Work history, tech stack, and projects with code.
      </p>
    </div>

    <!-- Experience -->
    <section class="mb-20 md:mb-28">
      <p class="font-sans text-text-muted text-xs uppercase tracking-[0.3em] mb-10 md:mb-14">
        Experience
      </p>
      <div class="space-y-10 md:space-y-12">
        <div
          v-for="job in experience"
          :key="job.company"
          class="grid md:grid-cols-12 gap-2 md:gap-8 pb-10 md:pb-12 border-b border-divider last:border-0 last:pb-0"
        >
          <div class="md:col-span-3">
            <span class="font-sans text-text-muted text-sm">{{ job.year }}</span>
          </div>
          <div class="md:col-span-9">
            <h3 class="font-sans text-text-primary text-base md:text-lg font-medium">{{ job.role }}</h3>
            <a
              v-if="job.url"
              :href="job.url"
              target="_blank"
              rel="noopener noreferrer"
              class="font-sans text-text-secondary text-sm underline underline-offset-4 decoration-divider hover:decoration-text-muted transition-colors duration-300"
            >{{ job.company }}</a>
            <span v-else class="font-sans text-text-secondary text-sm">{{ job.company }}</span>
            <p class="font-sans text-text-secondary text-sm leading-relaxed mt-3 max-w-2xl">{{ job.description }}</p>
            <div class="flex flex-wrap gap-1.5 mt-4">
              <span
                v-for="tech in job.tech"
                :key="tech"
                class="font-sans text-xs text-text-muted px-2.5 py-1 border border-divider"
              >{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section class="mb-20 md:mb-28">
      <p class="font-sans text-text-muted text-xs uppercase tracking-[0.3em] mb-10 md:mb-14">
        Projects
      </p>
      <div class="grid md:grid-cols-2 gap-8 md:gap-10">
        <div
          v-for="project in projects"
          :key="project.id"
          class="pb-8 border-b border-divider md:border-0 md:pb-0"
        >
          <div class="flex items-baseline justify-between mb-2">
            <h3 class="font-sans text-text-primary text-base md:text-lg font-medium">{{ project.title }}</h3>
            <span class="font-sans text-text-muted text-xs">{{ formatDate(project.completedDate) }}</span>
          </div>
          <p class="font-sans text-text-secondary text-sm leading-relaxed mb-4">{{ project.description }}</p>
          <div class="flex flex-wrap gap-1.5 mb-4">
            <span
              v-for="tech in project.technologies.slice(0, 5)"
              :key="tech"
              class="font-sans text-xs text-text-muted px-2.5 py-1 border border-divider"
            >{{ tech }}</span>
            <span
              v-if="project.technologies.length > 5"
              class="font-sans text-xs text-text-muted px-2.5 py-1"
            >+{{ project.technologies.length - 5 }}</span>
          </div>
          <div class="flex gap-4">
            <a
              :href="project.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="font-sans text-xs font-medium uppercase tracking-[0.15em] text-text-muted hover:text-text-primary transition-colors duration-300"
            >Code &rarr;</a>
            <a
              v-if="project.liveUrl"
              :href="project.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="font-sans text-xs font-medium uppercase tracking-[0.15em] text-text-muted hover:text-text-primary transition-colors duration-300"
            >Live &rarr;</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section class="mb-20 md:mb-28">
      <p class="font-sans text-text-muted text-xs uppercase tracking-[0.3em] mb-10 md:mb-14">
        Skills & Tools
      </p>
      <div class="grid md:grid-cols-3 gap-10 md:gap-12">
        <div v-for="category in skills" :key="category.name">
          <h3 class="font-sans text-text-primary text-sm font-medium uppercase tracking-[0.1em] mb-4">{{ category.name }}</h3>
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="skill in category.items"
              :key="skill"
              class="font-sans text-xs text-text-secondary px-2.5 py-1 border border-divider"
            >{{ skill }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-10 border-t border-divider">
      <p class="font-sans text-text-muted text-xs">&copy; 2026 Andrea López Palomeque</p>
      <div class="flex gap-6">
        <a href="mailto:andrealopezpalomeque@gmail.com" class="font-sans text-xs text-text-muted hover:text-text-primary transition-colors duration-300">andrealopezpalomeque@gmail.com</a>
        <a href="https://github.com/andrealopezpalomeque" target="_blank" rel="noopener noreferrer" class="font-sans text-xs font-medium uppercase tracking-[0.15em] text-text-muted hover:text-text-primary transition-colors duration-300">GitHub</a>
        <a href="https://www.linkedin.com/in/andrea-victoria-lopez-palomeque/" target="_blank" rel="noopener noreferrer" class="font-sans text-xs font-medium uppercase tracking-[0.15em] text-text-muted hover:text-text-primary transition-colors duration-300">LinkedIn</a>
      </div>
    </div>
  </div>
</template>

<script setup>
const { ogImageUrl } = useRuntimeConfig().public

useSeoMeta({
  title: 'Andrea López Palomeque — Developer Experience',
  ogTitle: 'Andrea López Palomeque — Developer Experience',
  description: 'Technical background, work history, and projects by Andrea López Palomeque. Vue.js, Nuxt, TypeScript, Tailwind CSS.',
  ogDescription: 'Technical background, work history, and projects by Andrea López Palomeque. Vue.js, Nuxt, TypeScript, Tailwind CSS.',
  ogImage: ogImageUrl,
  ogImageType: 'image/png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterCard: 'summary_large_image',
  twitterSite: '@pipilopezpalome',
  twitterCreator: '@pipilopezpalome',
  twitterTitle: 'Andrea López Palomeque — Developer Experience',
  twitterDescription: 'Technical background, work history, and projects by Andrea López Palomeque. Vue.js, Nuxt, TypeScript, Tailwind CSS.',
  twitterImage: ogImageUrl,
})

const experience = [
  {
    year: '2025 — Present',
    role: 'Founder & Developer',
    company: 'WiseUtils',
    url: 'https://wiseutils.com',
    description: 'Co-founded a software company specializing in AI-first solutions for small and medium-sized businesses. Building WhatsApp bots, e-commerce platforms, inventory management systems, RAG-powered search, and intelligent support agents.',
    tech: ['Vue.js', 'Nuxt', 'Node.js', 'AI Integration', 'WhatsApp API', 'Firebase'],
  },
  {
    year: '2024 — 2025',
    role: 'Frontend Developer',
    company: 'Meowtel',
    description: 'Owned frontend web development, building and iterating on key user-facing sections. Contributed to A/B testing, implemented analytics and tracking, and optimized Core Web Vitals. Participated in migration from Nuxt 3 SPA to PHP/Twig/Alpine.js for performance and SEO.',
    tech: ['Vue.js', 'Alpine.js', 'Tailwind CSS', 'PostHog', 'A/B Testing', 'CRO'],
  },
  {
    year: '2024',
    role: 'FullStack Developer',
    company: 'Asteroid Technologies',
    description: 'Web development using React.js, Next.js, Firebase. Collaborated with UX/UI designers on company website and new projects including Hablalo back office.',
    tech: ['React', 'Next.js', 'Firebase', 'Tailwind CSS'],
  },
  {
    year: '2023',
    role: 'Frontend Developer',
    company: 'TelCo SAPEM',
    description: 'Developed Wee! Pagos payment app and Wee!pas ticketing app using Vue.js. Built Recolector mobile app from scratch in React Native.',
    tech: ['Vue.js', 'React Native', 'Vuetify', 'Pinia'],
  },
]

const projects = [
  {
    id: '1',
    title: 'Text the Check',
    description: 'WhatsApp-first financial companion with dual modes: collaborative trip expense tracking and personal bill tracking. Built with WhatsApp Business API and Gemini AI for Argentine Spanish parsing.',
    technologies: ['Nuxt.js', 'Vue 3', 'Tailwind CSS', 'Node.js', 'Express', 'Firebase', 'WhatsApp API', 'TypeScript'],
    githubUrl: 'https://github.com/andrealopezpalomeque/text-the-check',
    liveUrl: 'https://textthecheck.app',
    completedDate: '2025-12',
  },
  {
    id: '6',
    title: 'Gasto Obra',
    description: 'Construction expense management platform. Users log expenses via WhatsApp using natural language parsed by Gemini AI, with a web dashboard for real-time insights and financial reports.',
    technologies: ['Nuxt 3', 'Vue 3', 'Tailwind CSS', 'Express.js', 'Firebase', 'WhatsApp Bot', 'Gemini AI'],
    githubUrl: 'https://github.com/imanolcorimayo/gasto-obra',
    liveUrl: 'https://gastoobra.wiseutils.com/',
    completedDate: '2026-02',
  },
  {
    id: '2',
    title: 'El Gran Peón',
    description: 'Full brand identity and e-commerce platform for an Argentine artisanal goods brand. Customer-facing storefront plus complete back-office for inventory management and stock control.',
    technologies: ['Nuxt.js', 'Vue 3', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Express', 'Firebase'],
    githubUrl: 'https://github.com/andrealopezpalomeque/el-gran-peon',
    liveUrl: 'https://elgranpeon.com',
    completedDate: '2026-02',
  },
  {
    id: '3',
    title: 'Cruzar Deportes',
    description: 'E-commerce platform for sports jerseys and apparel. Features product catalog, shopping cart, advanced search & filtering, and admin management tools.',
    technologies: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'Pinia', 'Firebase'],
    githubUrl: 'https://github.com/andrealopezpalomeque/cruzar-deportes/',
    liveUrl: 'https://deportes-cruzar.web.app/',
    completedDate: '2025-08',
  },
  {
    id: '4',
    title: 'InstalarPro',
    description: 'Platform connecting AC technicians with clients in Argentina/LATAM. Three interconnected domains: technician landing pages, back-office dashboard, and client booking.',
    technologies: ['Vue.js', 'TypeScript', 'Nuxt 3', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/imanolcorimayo/instalapro',
    liveUrl: 'https://instalapro-back-office.web.app/',
    completedDate: '2025-07',
  },
  {
    id: '5',
    title: 'Road to TOEFL',
    description: 'TOEFL exam prep app with word completion, reading comprehension, listening exercises, speaking prompts, and writing tasks.',
    technologies: ['Vue.js', 'Nuxt 3', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    githubUrl: 'https://github.com/andrealopezpalomeque/road-2-toefl',
    liveUrl: 'https://road-2-toefl.web.app/',
    completedDate: '2025-11',
  },
]

const skills = [
  {
    name: 'Frontend',
    items: ['Vue.js', 'Nuxt', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'Pinia', 'Alpine.js'],
  },
  {
    name: 'Backend & Data',
    items: ['Node.js', 'Express', 'Firebase', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Python'],
  },
  {
    name: 'Tools & Other',
    items: ['Git', 'Figma', 'Postman', 'Vercel', 'Render', 'AI Integration', 'WhatsApp API', 'A/B Testing', 'PostHog'],
  },
]

const formatDate = (dateString) => {
  const [year, month] = dateString.split('-')
  const date = new Date(parseInt(year), parseInt(month) - 1)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
}
</script>

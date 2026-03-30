<template>
  <div class="px-6 md:px-16 lg:px-24 pb-14">
    <!-- Header -->
    <nav class="flex items-center justify-between pt-8 md:pt-10 mb-20 md:mb-28">
      <NuxtLink
        :to="localePath('/')"
        class="font-sans text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-text-muted hover:text-text-primary transition-colors duration-300"
      >
        &larr; {{ $t('dev.backLink') }}
      </NuxtLink>
      <div class="flex items-center">
        <a
          href="/resume/Andrea_Lopez_Palomeque_Resume.pdf"
          target="_blank"
          class="font-sans text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-accent hover:text-text-primary transition-colors duration-300"
        >
          {{ $t('dev.downloadResume') }} &darr;
        </a>
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
      </div>
    </nav>

    <!-- Page title -->
    <div class="mb-16 md:mb-24">
      <h1
        class="font-serif text-text-primary leading-[1.05] animate-hero-1"
        style="font-size: clamp(2.25rem, 5vw, 4rem);"
      >
        {{ $t('dev.pageTitle') }}
      </h1>
      <p class="font-sans text-text-secondary text-base md:text-lg leading-relaxed max-w-xl mt-4 animate-hero-2">
        {{ $t('dev.pageSubtitle') }}
      </p>
    </div>

    <!-- Experience -->
    <section class="mb-20 md:mb-28">
      <p class="font-sans text-text-muted text-xs uppercase tracking-[0.3em] mb-10 md:mb-14">
        {{ $t('dev.experienceLabel') }}
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
        {{ $t('dev.projectsLabel') }}
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
            >{{ $t('dev.codeLink') }} &rarr;</a>
            <a
              v-if="project.liveUrl"
              :href="project.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="font-sans text-xs font-medium uppercase tracking-[0.15em] text-text-muted hover:text-text-primary transition-colors duration-300"
            >{{ $t('dev.liveLink') }} &rarr;</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section class="mb-20 md:mb-28">
      <p class="font-sans text-text-muted text-xs uppercase tracking-[0.3em] mb-10 md:mb-14">
        {{ $t('dev.skillsLabel') }}
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
      <p class="font-sans text-text-muted text-xs">{{ $t('dev.footer') }}</p>
      <div class="flex gap-6">
        <a href="mailto:andrealopezpalomeque@gmail.com" class="font-sans text-xs text-text-muted hover:text-text-primary transition-colors duration-300">andrealopezpalomeque@gmail.com</a>
        <a href="https://github.com/andrealopezpalomeque" target="_blank" rel="noopener noreferrer" class="font-sans text-xs font-medium uppercase tracking-[0.15em] text-text-muted hover:text-text-primary transition-colors duration-300">GitHub</a>
        <a href="https://www.linkedin.com/in/andrea-victoria-lopez-palomeque/" target="_blank" rel="noopener noreferrer" class="font-sans text-xs font-medium uppercase tracking-[0.15em] text-text-muted hover:text-text-primary transition-colors duration-300">LinkedIn</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const { ogImageUrl } = useRuntimeConfig().public
const { t, locale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

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
    id: '7',
    title: 'Route AI',
    description: t('dev.projects.routeAI.description'),
    technologies: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Express.js', 'Gemini AI', 'Pinia', 'PWA', 'Firebase', 'Web Speech API'],
    githubUrl: 'https://github.com/andrealopezpalomeque/root-ai',
    liveUrl: 'https://routeai.tech',
    completedDate: '2026-03',
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

const formatDate = (dateString) => {
  const [year, month] = dateString.split('-')
  const date = new Date(parseInt(year), parseInt(month) - 1)
  return date.toLocaleDateString(locale.value === 'es' ? 'es-AR' : 'en-US', { year: 'numeric', month: 'short' })
}
</script>

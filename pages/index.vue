<template>
  <div class="min-h-screen bg-background text-foreground relative">
    <!-- Navigation -->
    <nav class="fixed left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block pointer-events-auto">
      <div class="flex flex-col gap-6">
        <button
          v-for="section in sections"
          :key="section"
          @click="scrollToSection(section)"
          :class="[
            'w-2 h-12 rounded-full transition-all duration-500 border border-transparent cursor-pointer',
            activeSection === section
              ? 'bg-gray-900 dark:bg-white'
              : 'bg-gray-500/40 dark:bg-gray-400/40 hover:bg-gray-500/60 dark:hover:bg-gray-400/60'
          ]"
          :aria-label="`Navigate to ${section}`"
        />
      </div>
    </nav>

    <main>
      <!-- Hero Section -->
      <SectionsHero ref="introRef" />

      <!-- Experience Section -->
      <SectionsExperience ref="workRef" />

      <!-- Projects Section -->
      <SectionsProjects ref="projectsRef" />

      <!-- Contact Section -->
      <SectionsContact ref="contactRef" />

      <!-- Footer -->
      <footer class="!pt-[5rem] !pb-[5rem] border-t border-border">
        <div class="container-responsive">
          <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div class="space-y-2">
              <div class="text-sm text-muted-foreground">© 2025 Andrea Victoria López Palomeque. All rights reserved.</div>
              <div class="text-xs text-muted-foreground">Built with Nuxt.js and love from Buenos Aires</div>
            </div>

            <div class="flex items-center gap-4">
              <button
                @click="toggleTheme"
                class="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                <Icon
                  :icon="isDark ? 'ph:sun' : 'ph:moon'"
                  class="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </main>

    <!-- Gradient overlay at bottom -->
    <div class="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-30"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'

// Theme management
const isDark = ref(true)

// Navigation
const activeSection = ref('intro')
const sections = ['intro', 'work', 'projects', 'contact']

// Section refs
const introRef = ref(null)
const workRef = ref(null)
const projectsRef = ref(null)
const contactRef = ref(null)

// SEO and meta tags
useSeoMeta({
  title: 'Andrea Victoria López Palomeque - Frontend Developer',
  ogTitle: 'Andrea Victoria López Palomeque - Frontend Developer',
  description: 'Frontend Developer from Buenos Aires specializing in Vue.js, React, and modern web technologies. Available for freelance and full-time opportunities.',
  ogDescription: 'Frontend Developer from Buenos Aires specializing in Vue.js, React, and modern web technologies. Available for freelance and full-time opportunities.',
  keywords: 'frontend developer, vue.js, react, typescript, nuxt.js, tailwind css, portfolio, buenos aires, javascript, web developer',
  ogImage: '/og-image.jpg',
  ogImageAlt: 'Andrea Victoria López Palomeque - Frontend Developer Portfolio',
  twitterCard: 'summary_large_image',
  twitterImage: '/og-image.jpg',
  twitterTitle: 'Andrea Victoria López Palomeque - Frontend Developer',
  twitterDescription: 'Frontend Developer from Buenos Aires specializing in Vue.js, React, and modern web technologies.',
  colorScheme: 'light dark'
})

// Theme toggle
const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

// Scroll to section
const scrollToSection = (section) => {
  const element = document.getElementById(section)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }
}

// Intersection observer for navigation
let observer = null

onMounted(() => {
  // Initialize theme
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  isDark.value = savedTheme ? savedTheme === 'dark' : prefersDark
  document.documentElement.classList.toggle('dark', isDark.value)

  // Initialize intersection observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up')
          activeSection.value = entry.target.id
        }
      })
    },
    { threshold: 0.3, rootMargin: '0px 0px -20% 0px' }
  )

  // Observe sections
  const sectionElements = sections.map(section => document.getElementById(section)).filter(Boolean)
  sectionElements.forEach(section => {
    if (section) observer.observe(section)
  })
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})

// Page transitions
definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  }
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1px);
}
</style>
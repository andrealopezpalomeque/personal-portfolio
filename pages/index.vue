<template>
  <div>
    <!-- Hero Section -->
    <SectionsHero />

    <!-- About Section -->
    <SectionsAbout />

    <!-- Skills Section -->
    <SectionsSkills />

    <!-- Projects Section -->
    <SectionsProjects />

    <!-- Contact Section -->
    <SectionsContact />
  </div>
</template>

<script setup lang="ts">
// SEO and meta tags
useSeoMeta({
  title: 'Andrea Victoria - Full Stack Developer & UI/UX Enthusiast',
  ogTitle: 'Andrea Victoria - Full Stack Developer & UI/UX Enthusiast',
  description: 'Passionate full-stack developer creating beautiful, functional, and user-centered digital experiences. Specializing in Vue.js, Nuxt.js, TypeScript, and modern web technologies.',
  ogDescription: 'Passionate full-stack developer creating beautiful, functional, and user-centered digital experiences. Specializing in Vue.js, Nuxt.js, TypeScript, and modern web technologies.',
  keywords: 'full stack developer, web developer, vue.js, nuxt.js, typescript, tailwind css, portfolio, frontend, backend, ui/ux',
  ogImage: '/og-image.jpg',
  ogImageAlt: 'Andrea Victoria - Full Stack Developer Portfolio',
  twitterCard: 'summary_large_image',
  twitterImage: '/og-image.jpg',
  twitterTitle: 'Andrea Victoria - Full Stack Developer & UI/UX Enthusiast',
  twitterDescription: 'Passionate full-stack developer creating beautiful, functional, and user-centered digital experiences.',
  colorScheme: 'light dark'
})

// Structured data for SEO is handled via head tags

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
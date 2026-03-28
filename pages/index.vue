<template>
  <div>
    <SectionsHero />

    <!-- Breathing space — the whitespace IS the design -->
    <div class="w-full flex justify-center py-16 md:py-24">
      <div class="w-px h-16 md:h-24 bg-divider"></div>
    </div>

    <SectionsFeaturedWork />

    <!-- Breathing space -->
    <div class="w-full flex justify-center py-16 md:py-24">
      <div class="w-px h-16 md:h-24 bg-divider"></div>
    </div>

    <SectionsManifesto />

    <!-- Breathing space -->
    <div class="w-full flex justify-center py-16 md:py-24">
      <div class="w-px h-16 md:h-24 bg-divider"></div>
    </div>

    <SectionsAbout />

    <!-- Breathing space -->
    <div class="w-full flex justify-center py-12 md:py-16">
      <div class="w-px h-12 md:h-16 bg-divider"></div>
    </div>

    <SectionsContact />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Andrea López Palomeque — Digital spaces for people who care about their craft',
  ogTitle: 'Andrea López Palomeque — Digital spaces for people who care about their craft',
  description: 'I build digital spaces for people who care deeply about their craft. Frontend developer and brand thinker based in Buenos Aires.',
  ogDescription: 'I build digital spaces for people who care deeply about their craft. Frontend developer and brand thinker based in Buenos Aires.',
  ogImage: 'https://andrealopezpalomeque.dev/og-image.png',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://andrealopezpalomeque.dev/og-image.png',
})

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
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>

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

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

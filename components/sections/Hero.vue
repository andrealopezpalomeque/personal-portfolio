<template>
  <section id="hero" class="min-h-screen flex flex-col px-6 md:px-16 lg:px-24">
    <!-- Navigation -->
    <nav class="flex justify-end items-center gap-8 pt-8 md:pt-10 animate-hero-1">
      <a
        v-for="link in navLinks"
        :key="link.label"
        :href="link.href"
        class="font-sans text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-text-muted hover:text-text-primary transition-colors duration-300"
      >
        {{ link.label }}
      </a>
    </nav>

    <!-- Main content — positioned at golden ratio (roughly 38% from top) -->
    <div class="flex-1 flex flex-col justify-center" style="padding-bottom: 12vh;">
      <!-- Name -->
      <h1
        class="font-serif text-text-primary leading-[1.05] animate-hero-1"
        style="font-size: clamp(2.75rem, 8vw, 7.5rem);"
      >
        Andrea López Palomeque
      </h1>

      <!-- Statement -->
      <p class="font-sans text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl mt-6 md:mt-8 animate-hero-2">
        I build digital spaces for people who care deeply about their craft.
        <br class="hidden md:block" />
        Architects, engineers, makers — your work speaks for itself in person.
        <br class="hidden md:block" />
        Online, it deserves the same intention.
      </p>

      <!-- Location label -->
      <p class="font-sans text-text-muted text-xs md:text-sm uppercase tracking-[0.2em] mt-6 animate-hero-3">
        Frontend Developer · Buenos Aires
      </p>
    </div>

    <!-- Scroll indicator -->
    <div class="flex justify-center pb-8 md:pb-12 animate-hero-4">
      <span class="text-text-muted text-xs uppercase tracking-[0.3em] animate-scroll-pulse">
        scroll
      </span>
    </div>
  </section>
</template>

<script setup>
defineOptions({
  name: 'SectionsHero'
})

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'For recruiters', href: '/dev' },
]
</script>

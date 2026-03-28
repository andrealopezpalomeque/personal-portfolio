<template>
  <section id="about" class="py-24 md:py-32 px-6 md:px-16 lg:px-24">
    <!-- Label -->
    <p
      ref="labelRef"
      class="font-sans text-text-muted text-xs uppercase tracking-[0.3em] mb-10 md:mb-14 transition-all duration-700"
      :class="labelVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
    >
      About
    </p>

    <!-- Divider -->
    <div
      class="w-12 h-px bg-divider mb-10 md:mb-14 transition-all duration-700 delay-100"
      :class="labelVisible ? 'opacity-100' : 'opacity-0'"
    ></div>

    <!-- Bio -->
    <div class="max-w-2xl space-y-6">
      <p
        ref="bio1Ref"
        class="font-sans text-text-secondary text-base md:text-lg leading-relaxed transition-all duration-700"
        :class="bio1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        I'm a frontend developer based in Buenos Aires with 4+ years building for startups and independent brands. I work with Vue, Nuxt, TypeScript, and Tailwind — but what sets me apart is that I think like a designer and care like a founder.
      </p>

      <p
        ref="bio2Ref"
        class="font-sans text-text-secondary text-base md:text-lg leading-relaxed transition-all duration-700"
        :class="bio2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        I've built e-commerce platforms, AI-powered WhatsApp bots, and brand identities from scratch. Currently co-founding
        <a
          href="https://wiseutils.com"
          target="_blank"
          rel="noopener noreferrer"
          class="text-text-primary underline underline-offset-4 decoration-divider hover:decoration-text-muted transition-colors duration-300"
        >WiseUtils</a>
        with Imanol, building AI-first solutions for small businesses.
      </p>
    </div>

    <!-- Links -->
    <div
      ref="linksRef"
      class="flex gap-6 mt-10 md:mt-14 transition-all duration-700"
      :class="linksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
    >
      <a
        href="https://www.linkedin.com/in/andrea-victoria-lopez-palomeque/"
        target="_blank"
        rel="noopener noreferrer"
        class="font-sans text-xs font-medium uppercase tracking-[0.2em] text-text-muted hover:text-text-primary transition-colors duration-300"
      >LinkedIn</a>
      <a
        href="https://github.com/andrealopezpalomeque"
        target="_blank"
        rel="noopener noreferrer"
        class="font-sans text-xs font-medium uppercase tracking-[0.2em] text-text-muted hover:text-text-primary transition-colors duration-300"
      >GitHub</a>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineOptions({ name: 'SectionsAbout' })

const labelRef = ref(null)
const bio1Ref = ref(null)
const bio2Ref = ref(null)
const linksRef = ref(null)
const labelVisible = ref(false)
const bio1Visible = ref(false)
const bio2Visible = ref(false)
const linksVisible = ref(false)

let observer = null

onMounted(() => {
  const targets = [
    [labelRef, () => labelVisible.value = true],
    [bio1Ref, () => bio1Visible.value = true],
    [bio2Ref, () => bio2Visible.value = true],
    [linksRef, () => linksVisible.value = true],
  ]

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        targets.forEach(([r, set]) => {
          if (entry.target === r.value) set()
        })
        observer.unobserve(entry.target)
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  )

  targets.forEach(([r]) => { if (r.value) observer.observe(r.value) })
})

onUnmounted(() => { if (observer) observer.disconnect() })
</script>

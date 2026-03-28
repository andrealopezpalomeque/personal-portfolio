<template>
  <section id="contact" class="pt-24 md:pt-40 pb-10 md:pb-14 px-6 md:px-16 lg:px-24">
    <!-- Heading -->
    <h2
      ref="headingRef"
      class="font-serif text-text-primary leading-[1.1] transition-all duration-1000 ease-out"
      :class="headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      style="font-size: clamp(2.5rem, 6vw, 5rem);"
    >
      Let's talk
    </h2>

    <!-- Subline -->
    <p
      ref="subRef"
      class="font-sans text-text-secondary text-base md:text-lg leading-relaxed max-w-lg mt-6 md:mt-8 transition-all duration-700 delay-200"
      :class="subVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
    >
      Have a project, a brand, or an idea? I'd love to hear about it.
    </p>

    <!-- Email -->
    <a
      ref="emailRef"
      href="mailto:andrealopezpalomeque@gmail.com"
      class="inline-block font-sans text-text-primary text-lg md:text-xl mt-8 md:mt-10 underline underline-offset-4 decoration-divider hover:decoration-text-muted transition-all duration-300"
      :class="emailVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
    >
      andrealopezpalomeque@gmail.com
    </a>

    <!-- Social links -->
    <div
      ref="socialRef"
      class="flex gap-6 mt-8 md:mt-10 transition-all duration-700"
      :class="socialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
    >
      <a
        href="https://github.com/andrealopezpalomeque"
        target="_blank"
        rel="noopener noreferrer"
        class="font-sans text-xs font-medium uppercase tracking-[0.2em] text-text-muted hover:text-text-primary transition-colors duration-300"
      >GitHub</a>
      <a
        href="https://www.linkedin.com/in/andrea-victoria-lopez-palomeque/"
        target="_blank"
        rel="noopener noreferrer"
        class="font-sans text-xs font-medium uppercase tracking-[0.2em] text-text-muted hover:text-text-primary transition-colors duration-300"
      >LinkedIn</a>
    </div>

    <!-- Footer -->
    <p
      class="font-sans text-text-muted text-xs mt-32 md:mt-48 transition-all duration-700 delay-300"
      :class="socialVisible ? 'opacity-100' : 'opacity-0'"
    >
      &copy; 2026 Andrea López Palomeque
    </p>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineOptions({ name: 'SectionsContact' })

const headingRef = ref(null)
const subRef = ref(null)
const emailRef = ref(null)
const socialRef = ref(null)
const headingVisible = ref(false)
const subVisible = ref(false)
const emailVisible = ref(false)
const socialVisible = ref(false)

let observer = null

onMounted(() => {
  const targets = [
    [headingRef, () => headingVisible.value = true],
    [subRef, () => subVisible.value = true],
    [emailRef, () => emailVisible.value = true],
    [socialRef, () => socialVisible.value = true],
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

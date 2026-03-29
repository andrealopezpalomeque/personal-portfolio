<template>
  <section id="manifesto" class="py-24 md:py-40 px-6 md:px-16 lg:px-24">
    <div class="max-w-4xl">
      <!-- Big editorial statement -->
      <p
        ref="statementRef"
        class="font-serif leading-[1.15] transition-all duration-1000 ease-out"
        :class="statementVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        style="font-size: clamp(2rem, 5vw, 3.75rem);"
      >
        <span class="text-text-primary">{{ $t('manifesto.line1') }}</span>
        <span class="text-text-muted italic">{{ $t('manifesto.line1Emphasis') }}</span>
        <br />
        <span class="text-text-primary">{{ $t('manifesto.line2') }}</span>
        <br />
        <span class="text-text-secondary">{{ $t('manifesto.line3') }}</span>
        <span class="text-text-primary">{{ $t('manifesto.line3Emphasis') }}</span>
      </p>

      <!-- Supporting line -->
      <p
        ref="supportRef"
        class="font-sans text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mt-10 md:mt-14 transition-all duration-700 delay-300"
        :class="supportVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        {{ $t('manifesto.supporting') }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineOptions({ name: 'SectionsManifesto' })

const statementRef = ref(null)
const supportRef = ref(null)
const statementVisible = ref(false)
const supportVisible = ref(false)

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        if (entry.target === statementRef.value) statementVisible.value = true
        if (entry.target === supportRef.value) supportVisible.value = true
        observer.unobserve(entry.target)
      })
    },
    { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
  )
  if (statementRef.value) observer.observe(statementRef.value)
  if (supportRef.value) observer.observe(supportRef.value)
})

onUnmounted(() => { if (observer) observer.disconnect() })
</script>

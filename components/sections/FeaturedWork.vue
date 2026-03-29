<template>
  <section id="work" class="py-24 md:py-32 px-6 md:px-16 lg:px-24">
    <!-- Section label -->
    <p
      ref="labelRef"
      class="font-sans text-text-muted text-xs uppercase tracking-[0.3em] mb-16 md:mb-24 transition-all duration-700"
      :class="labelVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
    >
      {{ $t('featuredWork.sectionLabel') }}
    </p>

    <!-- Projects -->
    <div class="space-y-32 md:space-y-40">
      <article
        v-for="(project, index) in projects"
        :key="project.slug"
        :ref="el => { if (el) projectRefs[index] = el }"
        class="group transition-all duration-1000 ease-out"
        :class="projectVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
      >
        <!-- Visual container -->
        <a
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="block bg-divider transition-transform duration-700 group-hover:scale-[1.02] origin-center"
        >
          <!--
            To swap in video later, replace the <img> with:
            <video
              src="/assets/images/project-slug.mp4"
              autoplay loop muted playsinline
              class="w-full h-auto block"
            />
          -->
          <picture>
            <source :srcset="project.imageWebp" type="image/webp" />
            <img
              :src="project.image"
              :alt="project.title"
              width="2880"
              height="1870"
              :loading="index === 0 ? 'eager' : 'lazy'"
              decoding="async"
              :fetchpriority="index === 0 ? 'high' : 'auto'"
              sizes="100vw"
              class="w-full h-auto block"
            />
          </picture>
        </a>

        <!-- Project info — staggered reveal -->
        <div class="flex flex-col md:flex-row md:items-end md:justify-between mt-6 md:mt-8 gap-4">
          <div
            class="transition-all duration-700 delay-200"
            :class="projectVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
          >
            <h3
              class="font-serif text-text-primary leading-[1.1]"
              style="font-size: clamp(2rem, 4vw, 3.5rem);"
            >
              {{ project.title }}
            </h3>
            <p class="font-sans text-text-secondary text-base md:text-lg leading-relaxed max-w-xl mt-3">
              {{ project.description }}
            </p>
          </div>

          <a
            :href="project.url"
            target="_blank"
            rel="noopener noreferrer"
            class="font-sans text-xs font-medium uppercase tracking-[0.2em] text-accent hover:text-text-primary transition-all duration-300 whitespace-nowrap flex-shrink-0 delay-300"
            :class="projectVisible[index] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'"
          >
            {{ $t('featuredWork.visit') }} &rarr;
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'

defineOptions({
  name: 'SectionsFeaturedWork'
})

const { t } = useI18n()

const projects = computed(() => [
  {
    slug: 'el-gran-peon',
    title: 'El Gran Peón',
    description: t('featuredWork.elGranPeon.description'),
    image: '/assets/images/el-gran-peon.png',
    imageWebp: '/assets/images/el-gran-peon.webp',
    url: 'https://elgranpeon.com',
  },
  {
    slug: 'text-the-check',
    title: 'Text the Check',
    description: t('featuredWork.textTheCheck.description'),
    image: '/assets/images/text-the-check.png',
    imageWebp: '/assets/images/text-the-check.webp',
    url: 'https://textthecheck.app',
  },
])

// Scroll-reveal state
const labelRef = ref(null)
const labelVisible = ref(false)
const projectRefs = reactive({})
const projectVisible = reactive({})

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Label
          if (entry.target === labelRef.value) {
            labelVisible.value = true
          }
          // Projects
          projects.forEach((_, i) => {
            if (entry.target === projectRefs[i]) {
              projectVisible[i] = true
            }
          })
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  )

  if (labelRef.value) observer.observe(labelRef.value)
  projects.forEach((_, i) => {
    if (projectRefs[i]) observer.observe(projectRefs[i])
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

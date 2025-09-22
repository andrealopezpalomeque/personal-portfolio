<template>
  <section id="contact" class="py-20 sm:py-32 pb-40 sm:pb-52 opacity-0 animate-fade-in-up">
    <div class="container-responsive">
      <div class="grid lg:grid-cols-2 gap-12 sm:gap-16">
        <div class="space-y-6 sm:space-y-8">
          <h2 class="text-3xl sm:text-4xl font-light">Let's Connect</h2>

          <div class="space-y-6">
            <p class="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Always interested in new opportunities, collaborations, and conversations about technology and design.
            </p>

            <div class="space-y-4">
              <a
                href="mailto:andrealopezpalomeque@gmail.com"
                class="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
              >
                <span class="text-base sm:text-lg">andrealopezpalomeque@gmail.com</span>
                <Icon
                  icon="ph:arrow-right"
                  class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                />
              </a>
            </div>
          </div>
        </div>

        <div class="space-y-6 sm:space-y-8">
          <div class="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm min-w-0"
            >
              <div class="space-y-2 min-w-0">
                <div class="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                  {{ social.name }}
                </div>
                <div class="text-sm text-muted-foreground break-words overflow-hidden">{{ social.handle }}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { Icon } from '@iconify/vue'

defineOptions({
  name: 'SectionsContact'
})

const socialLinks = [
  { name: 'GitHub', handle: '@andrealopezpalomeque', url: 'https://github.com/andrealopezpalomeque' },
  { name: 'LinkedIn', handle: 'Andrea Victoria López Palomeque', url: 'https://www.linkedin.com/in/andrea-victoria-lopez-palomeque/' },
  { name: 'X', handle: '@pipilopezpalome', url: 'https://x.com' },
  { name: 'Portfolio', handle: 'View Live Site', url: '#' }
]
</script>
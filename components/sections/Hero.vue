<template>
  <section class="section-padding bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
    <div class="container-responsive">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Content -->
        <div class="text-center lg:text-left">
          <div class="animate-fade-in">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm
              <span class="text-gradient">{{ name }}</span>
            </h1>
          </div>

          <div class="animate-slide-up" style="animation-delay: 200ms; animation-fill-mode: both;">
            <h2 class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              {{ title }}
            </h2>
          </div>

          <div class="animate-slide-up" style="animation-delay: 400ms; animation-fill-mode: both;">
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              {{ description }}
            </p>
          </div>

          <div class="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" style="animation-delay: 600ms; animation-fill-mode: both;">
            <UiButton
              variant="primary"
              size="lg"
              href="#projects"
              icon="ph:rocket-launch"
            >
              View My Work
            </UiButton>
            <UiButton
              variant="outline"
              size="lg"
              href="#contact"
              icon="ph:chat-circle"
            >
              Let's Talk
            </UiButton>
          </div>

          <!-- Social Links -->
          <div class="animate-slide-up flex justify-center lg:justify-start space-x-4 mt-8" style="animation-delay: 800ms; animation-fill-mode: both;">
            <UiButton
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              variant="ghost"
              size="sm"
              :icon="social.icon"
              target="_blank"
              rel="noopener noreferrer"
              class="p-3"
            />
          </div>
        </div>

        <!-- Avatar/Image -->
        <div class="flex justify-center lg:justify-end">
          <div class="animate-bounce-slow">
            <div class="relative">
              <div class="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center shadow-2xl">
                <Icon
                  name="ph:user"
                  class="w-32 h-32 md:w-40 md:h-40 text-white"
                />
              </div>

              <!-- Floating Elements -->
              <div class="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce" style="animation-delay: 1s;"></div>
              <div class="absolute -bottom-2 -left-4 w-6 h-6 bg-green-400 rounded-full animate-bounce" style="animation-delay: 1.5s;"></div>
              <div class="absolute top-1/2 -left-8 w-4 h-4 bg-blue-400 rounded-full animate-bounce" style="animation-delay: 2s;"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="flex justify-center mt-16">
        <UiButton
          variant="ghost"
          href="#about"
          icon="ph:arrow-down"
          class="animate-bounce p-3"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Icon from '~/components/Icon.vue'

interface Props {
  name?: string
  title?: string
  description?: string
}

const props = withDefaults(defineProps<Props>(), {
  name: 'Andrea Victoria',
  title: 'Full Stack Developer & UI/UX Enthusiast',
  description: 'I create beautiful, functional, and user-centered digital experiences that solve real-world problems. Passionate about clean code, modern design, and turning ideas into reality.'
})

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com', icon: 'ph:github-logo' },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'ph:linkedin-logo' },
  { name: 'Twitter', href: 'https://twitter.com', icon: 'ph:twitter-logo' },
  { name: 'Email', href: 'mailto:hello@example.com', icon: 'ph:envelope' }
]
</script>
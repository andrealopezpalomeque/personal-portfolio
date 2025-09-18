<template>
  <footer class="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
    <div class="container-responsive py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand Section -->
        <div class="md:col-span-2">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Let's Build Something Amazing
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
            Passionate about creating innovative solutions and bringing ideas to life through code.
            Always excited to take on new challenges and collaborate on meaningful projects.
          </p>
          <div class="flex space-x-4">
            <Button
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              variant="ghost"
              size="sm"
              :icon="social.icon"
              target="_blank"
              rel="noopener noreferrer"
              class="p-2"
            />
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
            Quick Links
          </h4>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.name">
              <NuxtLink
                :to="link.href"
                class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
            Get in Touch
          </h4>
          <ul class="space-y-2">
            <li class="flex items-center text-gray-600 dark:text-gray-300">
              <Icon name="ph:envelope" class="w-4 h-4 mr-2" />
              <a
                href="mailto:hello@example.com"
                class="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                hello@example.com
              </a>
            </li>
            <li class="flex items-center text-gray-600 dark:text-gray-300">
              <Icon name="ph:map-pin" class="w-4 h-4 mr-2" />
              <span>Available Worldwide</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-500 dark:text-gray-400 text-sm">
            © {{ currentYear }} Portfolio. Built with Nuxt & Tailwind CSS.
          </p>
          <div class="flex items-center mt-4 md:mt-0">
            <Button
              variant="ghost"
              size="sm"
              icon="ph:arrow-up"
              @click="scrollToTop"
              class="p-2"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com', icon: 'ph:github-logo' },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'ph:linkedin-logo' },
  { name: 'Twitter', href: 'https://twitter.com', icon: 'ph:twitter-logo' },
  { name: 'Email', href: 'mailto:hello@example.com', icon: 'ph:envelope' }
]

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' }
]

const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>
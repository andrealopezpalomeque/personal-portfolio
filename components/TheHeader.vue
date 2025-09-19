<template>
  <header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
    <nav class="container-responsive">
      <div class="flex items-center justify-between h-16">
        <!-- Logo/Name -->
        <NuxtLink
          to="/"
          class="text-xl font-bold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          Portfolio
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors font-medium"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- Desktop Actions -->
        <div class="hidden md:flex items-center space-x-4">
          <UiButton
            variant="ghost"
            size="sm"
            :icon="isDark ? 'ph:sun' : 'ph:moon'"
            @click="toggleTheme"
            class="p-2"
          />
          <UiButton
            variant="primary"
            size="sm"
            href="#contact"
          >
            Contact
          </UiButton>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center space-x-2">
          <UiButton
            variant="ghost"
            size="sm"
            :icon="isDark ? 'ph:sun' : 'ph:moon'"
            @click="toggleTheme"
            class="p-2"
          />
          <UiButton
            variant="ghost"
            size="sm"
            :icon="isOpen ? 'ph:x' : 'ph:list'"
            @click="toggleMobileMenu"
            class="p-2"
          />
        </div>
      </div>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="isOpen" class="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
          <div class="flex flex-col space-y-4">
            <NuxtLink
              v-for="item in navigation"
              :key="item.name"
              :to="item.href"
              class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors font-medium px-2 py-1"
              @click="closeMobileMenu"
            >
              {{ item.name }}
            </NuxtLink>
            <div class="pt-2 border-t border-gray-200 dark:border-gray-700">
              <UiButton
                variant="primary"
                size="sm"
                href="#contact"
                class="w-full"
                @click="closeMobileMenu"
              >
                Contact
              </UiButton>
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'

const { isDark, toggleTheme } = useTheme()
const isOpen = ref(false)

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
]

const toggleMobileMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMobileMenu = () => {
  isOpen.value = false
}

// Close mobile menu when route changes
watch(() => useRoute().path, () => {
  closeMobileMenu()
})
</script>
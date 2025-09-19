<template>
  <section id="about" class="section-padding bg-white dark:bg-gray-900">
    <div class="container-responsive">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About Me
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Passionate developer with a love for creating innovative solutions and meaningful user experiences
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Content -->
        <div>
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              {{ aboutText }}
            </p>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              {{ backgroundText }}
            </p>
            <p class="text-gray-600 dark:text-gray-300 mb-8">
              {{ passionText }}
            </p>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-2 gap-6 mb-8">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="text-center lg:text-left"
            >
              <div class="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {{ stat.value }}
              </div>
              <div class="text-gray-600 dark:text-gray-300 text-sm">
                {{ stat.label }}
              </div>
            </div>
          </div>

          <!-- Download CV Button -->
          <UiButton
            variant="primary"
            size="lg"
            icon="ph:download"
            href="/resume.pdf"
            target="_blank"
          >
            Download Resume
          </UiButton>
        </div>

        <!-- Image/Visual -->
        <div class="flex justify-center lg:justify-end">
          <UiCard variant="elevated" :hover="false" class="p-8 max-w-md">
            <div class="space-y-6">
              <!-- Skills Preview -->
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Core Technologies
                </h3>
                <div class="grid grid-cols-3 gap-4">
                  <div
                    v-for="tech in topTechnologies"
                    :key="tech.name"
                    class="flex flex-col items-center text-center"
                  >
                    <div class="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-2">
                      <Icon
                        :name="tech.icon"
                        class="w-6 h-6 text-primary-600 dark:text-primary-400"
                      />
                    </div>
                    <span class="text-xs text-gray-600 dark:text-gray-300">
                      {{ tech.name }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Fun Facts -->
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Fun Facts
                </h3>
                <ul class="space-y-2">
                  <li
                    v-for="fact in funFacts"
                    :key="fact"
                    class="flex items-center text-sm text-gray-600 dark:text-gray-300"
                  >
                    <Icon name="ph:check" class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {{ fact }}
                  </li>
                </ul>
              </div>
            </div>
          </UiCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Icon from '~/components/Icon.vue'

defineOptions({
  name: 'SectionsAbout'
})

const props = withDefaults(defineProps(), {
  aboutText: "I'm a full-stack developer with a passion for creating digital experiences that are not only functional but also intuitive and engaging. With several years of experience in web development, I've had the opportunity to work on diverse projects ranging from e-commerce platforms to data visualization tools.",
  backgroundText: "My journey into programming started with curiosity and has evolved into a career I'm truly passionate about. I believe in writing clean, maintainable code and staying up-to-date with the latest technologies and best practices in the industry.",
  passionText: "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I'm always excited to take on new challenges and collaborate on innovative projects."
})

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '25+', label: 'Projects Completed' },
  { value: '15+', label: 'Technologies' },
  { value: '100%', label: 'Client Satisfaction' }
]

const topTechnologies = [
  { name: 'Vue.js', icon: 'logos:vue' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'Node.js', icon: 'logos:nodejs-icon' },
  { name: 'Python', icon: 'logos:python' },
  { name: 'PostgreSQL', icon: 'logos:postgresql' },
  { name: 'Docker', icon: 'logos:docker-icon' }
]

const funFacts = [
  'Coffee enthusiast ☕',
  'Love solving puzzles 🧩',
  'Always learning something new 📚',
  'Enjoy teaching others 👨‍🏫'
]
</script>
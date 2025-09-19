<template>
  <section id="skills" class="section-padding bg-gray-50 dark:bg-gray-800">
    <div class="container-responsive">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Skills & Technologies
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A comprehensive toolkit of modern technologies and frameworks I use to bring ideas to life
        </p>
      </div>

      <!-- Skills Categories -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <UiCard
          v-for="category in skillCategories"
          :key="category.name"
          variant="elevated"
          class="p-6"
        >
          <template #header>
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mr-4">
                <Icon
                  :name="category.icon"
                  class="w-6 h-6 text-primary-600 dark:text-primary-400"
                />
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  {{ category.name }}
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  {{ category.description }}
                </p>
              </div>
            </div>
          </template>

          <div class="space-y-3">
            <div
              v-for="skill in category.skills"
              :key="skill.name"
              class="flex items-center justify-between"
            >
              <div class="flex items-center">
                <Icon
                  v-if="skill.icon"
                  :name="skill.icon"
                  class="w-4 h-4 mr-2"
                />
                <span class="text-gray-700 dark:text-gray-300 text-sm">
                  {{ skill.name }}
                </span>
              </div>
              <UiBadge
                :variant="getLevelVariant(skill.level)"
                size="sm"
                :outlined="true"
              >
                {{ skill.level }}
              </UiBadge>
            </div>
          </div>
        </UiCard>
      </div>

      <!-- Skills Progress -->
      <div class="mt-16">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Proficiency Levels
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div
            v-for="skill in topSkills"
            :key="skill.name"
            class="space-y-2"
          >
            <div class="flex justify-between items-center">
              <span class="text-gray-700 dark:text-gray-300 font-medium">
                {{ skill.name }}
              </span>
              <span class="text-gray-500 dark:text-gray-400 text-sm">
                {{ skill.percentage }}%
              </span>
            </div>
            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                class="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                :style="{ width: skill.percentage + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tools & Certifications -->
      <div class="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Tools -->
        <UiCard title="Development Tools" variant="elevated">
          <div class="grid grid-cols-3 gap-4">
            <div
              v-for="tool in tools"
              :key="tool.name"
              class="flex flex-col items-center text-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <Icon
                :name="tool.icon"
                class="w-8 h-8 mb-2 text-gray-600 dark:text-gray-300"
              />
              <span class="text-xs text-gray-600 dark:text-gray-300">
                {{ tool.name }}
              </span>
            </div>
          </div>
        </UiCard>

        <!-- Currently Learning -->
        <UiCard title="Currently Learning" variant="elevated">
          <div class="space-y-3">
            <div
              v-for="learning in currentlyLearning"
              :key="learning.name"
              class="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700"
            >
              <div class="flex items-center">
                <Icon
                  :name="learning.icon"
                  class="w-5 h-5 mr-3 text-primary-600 dark:text-primary-400"
                />
                <div>
                  <div class="font-medium text-gray-900 dark:text-white text-sm">
                    {{ learning.name }}
                  </div>
                  <div class="text-xs text-gray-600 dark:text-gray-300">
                    {{ learning.progress }}
                  </div>
                </div>
              </div>
              <UiBadge variant="info" size="sm">
                Learning
              </UiBadge>
            </div>
          </div>
        </UiCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Skill } from '~/types'
import Icon from '~/components/Icon.vue'

defineOptions({
  name: 'SectionsSkills'
})

const skillCategories = [
  {
    name: 'Frontend Development',
    description: 'Modern UI/UX with responsive design',
    icon: 'ph:monitor',
    skills: [
      { name: 'Vue.js/Nuxt.js', level: 'advanced', icon: 'logos:vue' },
      { name: 'React/Next.js', level: 'intermediate', icon: 'logos:react' },
      { name: 'TypeScript', level: 'advanced', icon: 'logos:typescript-icon' },
      { name: 'Tailwind CSS', level: 'expert', icon: 'logos:tailwindcss-icon' },
      { name: 'HTML/CSS', level: 'expert' }
    ] as Skill[]
  },
  {
    name: 'Backend Development',
    description: 'Scalable server-side solutions',
    icon: 'ph:server',
    skills: [
      { name: 'Node.js', level: 'advanced', icon: 'logos:nodejs-icon' },
      { name: 'Python', level: 'intermediate', icon: 'logos:python' },
      { name: 'Express.js', level: 'advanced' },
      { name: 'REST APIs', level: 'advanced' },
      { name: 'GraphQL', level: 'intermediate', icon: 'logos:graphql' }
    ] as Skill[]
  },
  {
    name: 'Database & DevOps',
    description: 'Data management and deployment',
    icon: 'ph:database',
    skills: [
      { name: 'PostgreSQL', level: 'advanced', icon: 'logos:postgresql' },
      { name: 'MongoDB', level: 'intermediate', icon: 'logos:mongodb-icon' },
      { name: 'Docker', level: 'intermediate', icon: 'logos:docker-icon' },
      { name: 'Git/GitHub', level: 'advanced', icon: 'logos:git-icon' },
      { name: 'CI/CD', level: 'intermediate' }
    ] as Skill[]
  }
]

const topSkills = [
  { name: 'Vue.js/Nuxt.js', percentage: 90 },
  { name: 'TypeScript', percentage: 85 },
  { name: 'Tailwind CSS', percentage: 95 },
  { name: 'Node.js', percentage: 80 },
  { name: 'PostgreSQL', percentage: 75 },
  { name: 'Python', percentage: 70 }
]

const tools = [
  { name: 'VS Code', icon: 'logos:visual-studio-code' },
  { name: 'Figma', icon: 'logos:figma' },
  { name: 'Postman', icon: 'logos:postman-icon' },
  { name: 'GitHub', icon: 'logos:github-icon' },
  { name: 'Vercel', icon: 'logos:vercel-icon' },
  { name: 'Netlify', icon: 'logos:netlify-icon' }
]

const currentlyLearning = [
  { name: 'Rust', progress: 'Beginner', icon: 'logos:rust' },
  { name: 'AWS', progress: 'Learning fundamentals', icon: 'logos:aws' },
  { name: 'Three.js', progress: 'Exploring 3D web', icon: 'logos:threejs' }
]

const getLevelVariant = (level: string) => {
  const variants = {
    beginner: 'warning',
    intermediate: 'info',
    advanced: 'success',
    expert: 'primary'
  }
  return variants[level as keyof typeof variants] || 'secondary'
}
</script>
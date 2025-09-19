<template>
  <section id="projects" class="section-padding bg-white dark:bg-gray-900">
    <div class="container-responsive">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Featured Projects
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A selection of projects that showcase my skills and passion for creating innovative solutions
        </p>
      </div>

      <!-- Filter Buttons -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <UiButton
          v-for="filter in filters"
          :key="filter"
          :variant="activeFilter === filter ? 'primary' : 'outline'"
          size="sm"
          @click="setFilter(filter)"
        >
          {{ filter }}
        </UiButton>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Transition
          v-for="project in filteredProjects"
          :key="project.id"
          name="project"
          appear
        >
          <UiCard
            variant="elevated"
            :padding="false"
            class="group overflow-hidden"
          >
            <!-- Project Image -->
            <div class="relative h-48 bg-gradient-to-br from-primary-400 to-primary-600 overflow-hidden">
              <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <Icon
                  name="ph:code"
                  class="w-16 h-16 text-white opacity-60"
                />
              </div>

              <!-- Project Links Overlay -->
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="flex space-x-2">
                  <UiButton
                    v-if="project.liveUrl"
                    :href="project.liveUrl"
                    variant="primary"
                    size="sm"
                    icon="ph:eye"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </UiButton>
                  <UiButton
                    v-if="project.githubUrl"
                    :href="project.githubUrl"
                    variant="secondary"
                    size="sm"
                    icon="ph:github-logo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </UiButton>
                </div>
              </div>

              <!-- Featured Badge -->
              <div v-if="project.featured" class="absolute top-4 left-4">
                <UiBadge variant="primary" icon="ph:star">
                  Featured
                </UiBadge>
              </div>
            </div>

            <!-- Project Content -->
            <div class="p-6">
              <div class="flex items-start justify-between mb-3">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {{ project.title }}
                </h3>
                <span class="text-sm text-gray-500 dark:text-gray-400 ml-2">
                  {{ formatDate(project.completedDate) }}
                </span>
              </div>

              <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                {{ project.description }}
              </p>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-2 mb-4">
                <UiBadge
                  v-for="tech in project.technologies.slice(0, 3)"
                  :key="tech"
                  variant="secondary"
                  size="sm"
                  :outlined="true"
                >
                  {{ tech }}
                </UiBadge>
                <UiBadge
                  v-if="project.technologies.length > 3"
                  variant="secondary"
                  size="sm"
                  :outlined="true"
                >
                  +{{ project.technologies.length - 3 }}
                </UiBadge>
              </div>

              <!-- Action Buttons -->
              <div class="flex justify-between items-center">
                <div class="flex space-x-2">
                  <UiButton
                    v-if="project.liveUrl"
                    :href="project.liveUrl"
                    variant="ghost"
                    size="sm"
                    icon="ph:arrow-square-out"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                  <UiButton
                    v-if="project.githubUrl"
                    :href="project.githubUrl"
                    variant="ghost"
                    size="sm"
                    icon="ph:github-logo"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </div>
                <UiButton
                  variant="ghost"
                  size="sm"
                  icon="ph:info"
                  @click="openProjectModal(project)"
                >
                  Details
                </UiButton>
              </div>
            </div>
          </UiCard>
        </Transition>
      </div>

      <!-- Load More Button -->
      <div v-if="hasMoreProjects" class="text-center mt-12">
        <UiButton
          variant="outline"
          size="lg"
          icon="ph:plus"
          @click="loadMoreProjects"
        >
          Load More Projects
        </UiButton>
      </div>

      <!-- View All Projects Button -->
      <div class="text-center mt-8">
        <UiButton
          variant="primary"
          size="lg"
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          icon="ph:github-logo"
        >
          View All on GitHub
        </UiButton>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Project } from '~/types'
import Icon from '~/components/Icon.vue'

defineOptions({
  name: 'SectionsProjects'
})

// Sample projects data
const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Dashboard',
    description: 'A comprehensive admin dashboard for managing e-commerce operations with real-time analytics, inventory management, and customer insights.',
    technologies: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    liveUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/ecommerce-dashboard',
    featured: true,
    completedDate: '2024-01'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    liveUrl: 'https://tasks.example.com',
    githubUrl: 'https://github.com/example/task-management',
    featured: true,
    completedDate: '2023-12'
  },
  {
    id: '3',
    title: 'Weather Analytics API',
    description: 'A robust REST API providing weather data analytics with machine learning predictions and historical data visualization.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
    githubUrl: 'https://github.com/example/weather-api',
    featured: false,
    completedDate: '2023-11'
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with cutting-edge technologies and optimized for performance.',
    technologies: ['Nuxt.js', 'TypeScript', 'Tailwind CSS', 'Iconify'],
    liveUrl: 'https://portfolio.example.com',
    githubUrl: 'https://github.com/example/portfolio',
    featured: false,
    completedDate: '2023-10'
  },
  {
    id: '5',
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management with multi-platform integration and automated reporting.',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://social.example.com',
    githubUrl: 'https://github.com/example/social-dashboard',
    featured: false,
    completedDate: '2023-09'
  },
  {
    id: '6',
    title: 'Mobile Expense Tracker',
    description: 'Cross-platform mobile app for expense tracking with budget management and financial insights.',
    technologies: ['React Native', 'TypeScript', 'SQLite', 'Expo'],
    githubUrl: 'https://github.com/example/expense-tracker',
    featured: false,
    completedDate: '2023-08'
  }
]

const props = defineProps<{
  projects?: Project[]
}>()

const activeFilter = ref('All')
const showCount = ref(6)

const filters = ['All', 'Web App', 'Mobile', 'E-commerce', 'API']

// Get projects from props or use sample data as fallback
const projectsToUse = computed(() => props.projects || sampleProjects)

const filteredProjects = computed(() => {
  let filtered = projectsToUse.value

  if (activeFilter.value !== 'All') {
    filtered = filtered.filter(project =>
      project.technologies.some(tech =>
        getCategoryFromTech(tech) === activeFilter.value
      )
    )
  }

  return filtered.slice(0, showCount.value)
})

const hasMoreProjects = computed(() => {
  return showCount.value < (props.projects?.length ?? projectsToUse.value.length)
})

const setFilter = (filter: string) => {
  activeFilter.value = filter
  showCount.value = 6
}

const loadMoreProjects = () => {
  showCount.value += 6
}

const formatDate = (dateString: string) => {
  const [year, month] = dateString.split('-')
  const date = new Date(parseInt(year || '0'), parseInt(month || '0') - 1)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
}

const getCategoryFromTech = (tech: string) => {
  const categoryMap: Record<string, string> = {
    'Vue.js': 'Web App',
    'React': 'Web App',
    'Nuxt.js': 'Web App',
    'React Native': 'Mobile',
    'Flutter': 'Mobile',
    'Shopify': 'E-commerce',
    'WooCommerce': 'E-commerce',
    'Node.js': 'API',
    'Express': 'API',
    'FastAPI': 'API'
  }
  return categoryMap[tech] || 'Web App'
}

const openProjectModal = (project: Project) => {
  // TODO: Implement project detail modal
  console.log('Opening project details for:', project.title)
}

</script>

<style scoped>
.project-enter-active,
.project-leave-active {
  transition: all 0.3s ease;
}

.project-enter-from,
.project-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
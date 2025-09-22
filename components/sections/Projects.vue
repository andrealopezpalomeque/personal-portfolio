<template>
  <section id="projects" class="section-padding">
    <div class="container-responsive">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-light text-foreground mb-4">
          Recent Projects
        </h2>
        <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
          A selection of projects that showcase my skills and passion for creating innovative solutions
        </p>
      </div>


      <!-- Projects Grid -->
      <div class="grid gap-6 sm:gap-8 lg:grid-cols-2">
        <article
          v-for="project in filteredProjects"
          :key="project.id"
          class="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
        >
          <div class="space-y-4">
            <div class="flex items-center justify-between text-xs text-muted-foreground font-mono">
              <span>{{ formatDate(project.completedDate) }}</span>
              <span v-if="project.featured">Featured</span>
            </div>

            <h3 class="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
              {{ project.title }}
            </h3>

            <p class="text-muted-foreground leading-relaxed">{{ project.description }}</p>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies.slice(0, 4)"
                :key="tech"
                class="px-2 py-1 text-xs text-muted-foreground rounded border border-border hover:border-muted-foreground/50 transition-colors duration-300"
              >
                {{ tech }}
              </span>
              <span
                v-if="project.technologies.length > 4"
                class="px-2 py-1 text-xs text-muted-foreground rounded border border-border"
              >
                +{{ project.technologies.length - 4 }}
              </span>
            </div>

            <!-- Project Links -->
            <div class="flex items-center gap-4 pt-2">
              <a
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <Icon icon="ph:github-logo" class="w-4 h-4" />
                <span>View Code</span>
              </a>
              
              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <Icon icon="ph:arrow-square-out" class="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </article>
      </div>


    </div>
  </section>
</template>


<script setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

defineOptions({
  name: 'SectionsProjects'
})

// Real projects data based on resume
const realProjects = [
  {
    id: '1',
    title: 'Cruzar Deportes - Sports Jersey E-commerce',
    description: 'Specialized e-commerce platform for sports jerseys and apparel from teams worldwide. Features comprehensive product catalog, shopping cart system, advanced search & filtering, and admin management tools.',
    technologies: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'Pinia', 'Cloudinary', 'Firebase'],
    githubUrl: 'https://github.com/andrealopezpalomeque/cruzar-deportes/',
    liveUrl: 'https://deportes-cruzar.web.app/',
    featured: true,
    completedDate: '2024-03'
  },
  {
    id: '2',
    title: 'Carnavales Correntinos 2026',
    description: 'Interactive social platform dedicated to Argentina\'s most important festival - Carnavales Correntinos 2026. Features live countdown, social networking, user profiles, exclusive galleries, and admin management system.',
    technologies: ['Nuxt 3', 'Vue.js', 'Firebase', 'Firestore', 'Tailwind CSS', 'Pinia'],
    githubUrl: 'https://github.com/andrealopezpalomeque/carnavales-correntinos-2026',
    liveUrl: 'https://carnavales-correntinos-2026.web.app/',
    featured: true,
    completedDate: '2024-01'
  },
  {
    id: '3',
    title: 'InstalarPro - AC Technician Platform',
    description: 'Comprehensive platform connecting air conditioner technicians with clients in Argentina/LATAM. Features three interconnected domains: technician landing pages, back-office management dashboard, and client booking interface. (Project in progress)',
    technologies: ['Vue.js', 'TypeScript', 'Nuxt 3', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/imanolcorimayo/instalapro',
    liveUrl: 'https://instalapro-back-office.web.app/',
    featured: true,
    completedDate: '2024-09'
  },
  {
    id: '4',
    title: 'Food App',
    description: 'Full Stack project for Henry\'s bootcamp using React, Redux, Node.js, Express.js and PostgreSQL with modern architecture.',
    technologies: ['React', 'Redux', 'Node.js', 'Express.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/andrealopezpalomeque/food-app',
    featured: true,
    completedDate: '2022-12'
  }
]

const props = defineProps()

// Get projects from props or use real data as fallback
const filteredProjects = computed(() => props.projects || realProjects)

const formatDate = (dateString) => {
  const [year, month] = dateString.split('-')
  const date = new Date(parseInt(year || '0'), parseInt(month || '0') - 1)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
}
</script>


<template>
  <section id="projects" class="section-padding">
    <div class="container-responsive">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-light text-foreground mb-4">
          Recent Thoughts
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
          class="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
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

            <div class="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              <span>View project</span>
              <Icon
                icon="ph:arrow-right"
                class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              />
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
    title: 'GO API',
    description: 'Golang API REST made with Gorm, Fiber and SQLite. A robust backend solution demonstrating modern Go development practices.',
    technologies: ['Golang', 'Gorm', 'Fiber', 'SQLite'],
    githubUrl: 'https://github.com/andrealopezpalomeque',
    featured: true,
    completedDate: '2024-01'
  },
  {
    id: '2',
    title: 'Swift Quiz App',
    description: 'iOS app using MVC architecture that allows users to participate in a quiz answering true/false questions with elegant UI.',
    technologies: ['Swift', 'iOS', 'MVC', 'UIKit'],
    githubUrl: 'https://github.com/andrealopezpalomeque',
    featured: true,
    completedDate: '2023-11'
  },
  {
    id: '3',
    title: 'BMI Calculator',
    description: 'Mobile app developed in Swift using MVC architecture to calculate BMI with clean interface and health insights.',
    technologies: ['Swift', 'iOS', 'MVC', 'HealthKit'],
    githubUrl: 'https://github.com/andrealopezpalomeque',
    featured: false,
    completedDate: '2023-10'
  },
  {
    id: '4',
    title: 'Food App',
    description: 'Full Stack project for Henry\'s bootcamp using React, Redux, Node.js, Express.js and PostgreSQL with modern architecture.',
    technologies: ['React', 'Redux', 'Node.js', 'Express.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/andrealopezpalomeque',
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


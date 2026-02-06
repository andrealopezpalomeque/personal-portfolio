<template>
  <section id="work" class="section-padding opacity-0 animate-fade-in-up">
    <div class="container-responsive">
      <div class="space-y-12 sm:space-y-16">
        <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 class="text-3xl sm:text-4xl font-light">Selected Work</h2>
          <div class="text-sm text-muted-foreground font-mono">2023 — 2025</div>
        </div>

        <div class="space-y-8 sm:space-y-12">
          <div
            v-for="(job, index) in experience"
            :key="index"
            class="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
          >
            <div class="lg:col-span-2">
              <div class="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                {{ job.year }}
              </div>
            </div>

            <div class="lg:col-span-6 space-y-3">
              <div>
                <h3 class="text-lg sm:text-xl font-medium">{{ job.role }}</h3>
                <div class="text-muted-foreground">{{ job.company }}</div>
              </div>
              <p class="text-muted-foreground leading-relaxed max-w-lg">{{ job.description }}</p>
            </div>

            <div class="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
              <span
                v-for="tech in job.tech"
                :key="tech"
                class="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineOptions({
  name: 'SectionsExperience'
})

const experience = [
  {
    year: "2024 — 2025",
    role: "Frontend Developer",
    company: "Meowtel",
    description: "Owned frontend web development, building and iterating on key user-facing sections while collaborating closely with product and design on UX and layout decisions. Contributed to experimentation and A/B testing initiatives, implemented analytics and tracking, and optimized performance and Core Web Vitals. As part of broader platform improvements, participated in the gradual migration of selected components from a Nuxt 3 SPA to a PHP/Twig/Alpine.js stack to support performance and SEO goals.",
    tech: ["Vue.js", "Alpine.js", "Tailwind CSS", "PostHog Analytics", "Google Analytics", "Figma", "A/B Testing", "Responsive Design", "Sentry (Error Monitoring)", "Conversion Rate Optimization (CRO)", "UI/UX Collaboration"],
  },
  {
    year: "2024",
    role: "FullStack Developer",
    company: "Asteroid Technologies",
    description: "Web development using React.js, Next.js, Firebase. Collaborated with UX/UI designers on company website and new projects including Hablalo back office.",
    tech: ["React", "Next.js", "Firebase", "Tailwind CSS"]
  },
  {
    year: "2023",
    role: "Frontend Developer",
    company: "TelCo SAPEM",
    description: "Developed Wee! Pagos payment app and Wee!pas ticketing app using Vue.js. Built Recolector mobile app from scratch in React Native.",
    tech: ["Vue.js", "React Native", "Vuetify", "Pinia"]
  }
]
</script>
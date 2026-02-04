<template>
  <section id="intro" class="min-h-screen flex items-center opacity-0 animate-fade-in-up">
    <div class="container-responsive">
      <div class="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
        <div class="lg:col-span-3 space-y-6 sm:space-y-8">
          <div class="space-y-3 sm:space-y-2">
            <div class="text-sm text-muted-foreground font-mono tracking-wider">PORTFOLIO / 2026</div>
            <h1 class="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
              Andrea Victoria
              <br />
              <span class="text-muted-foreground">López Palomeque</span>
            </h1>
          </div>

          <div class="space-y-6 max-w-md">
            <p class="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Frontend developer with <span class="text-foreground">3 years of experience</span> building clean, performant UIs in <span class="text-foreground">fast-paced startups</span>. I care about <span class="text-foreground">component architecture</span>, user experience, and shipping things that actually work. Currently expanding into <span class="text-foreground">backend development</span> and starting a <span class="text-foreground">Software Engineering degree</span>.
            </p>

            <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for work
              </div>
              <div>Buenos Aires, Argentina</div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
          <div class="space-y-4">
            <div class="text-sm text-muted-foreground font-mono">CURRENTLY</div>
            <div class="space-y-2">
              <div class="text-foreground">Building side projects</div>
              <div class="text-muted-foreground">& starting Software Engineering degree</div>
            </div>
          </div>

          <div class="space-y-4">
            <div class="text-sm text-muted-foreground font-mono">FOCUS</div>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in focusSkills"
                :key="skill"
                class="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
              >
                {{ skill }}
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
  name: 'SectionsHero'
})

const focusSkills = ['Vue.js', 'Nuxt', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'Firebase', 'React', 'Performance', 'AI Tools']
</script>
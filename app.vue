<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Andrea López Palomeque',
        url: 'https://andrealopezpalomeque.dev',
        jobTitle: 'Frontend Developer',
        description: 'I build digital spaces for people who care deeply about their craft.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Buenos Aires',
          addressCountry: 'AR'
        },
        sameAs: [
          'https://github.com/andrealopezpalomeque',
          'https://www.linkedin.com/in/andrea-victoria-lopez-palomeque/'
        ],
        knowsAbout: ['Vue.js', 'Nuxt', 'TypeScript', 'Tailwind CSS', 'React', 'Node.js', 'Firebase'],
        worksFor: {
          '@type': 'Organization',
          name: 'WiseUtils',
          url: 'https://wiseutils.com'
        }
      })
    }
  ]
})
</script>
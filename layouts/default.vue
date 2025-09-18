<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader />

    <main class="flex-1">
      <slot />
    </main>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const { initTheme } = useTheme()

// Initialize theme on mount
onMounted(() => {
  initTheme()
})
</script>
<template>
  <div class="min-h-screen flex flex-col">
    <main class="flex-1">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const { initTheme } = useTheme()

// Initialize theme on mount
onMounted(() => {
  initTheme()
})
</script>
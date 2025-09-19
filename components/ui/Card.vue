<template>
  <div :class="cardClasses">
    <div v-if="$slots.header || title" class="p-6 pb-0">
      <slot name="header">
        <h3 v-if="title" class="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {{ title }}
        </h3>
      </slot>
    </div>

    <div :class="contentClasses">
      <slot />
    </div>

    <div v-if="$slots.footer" class="p-6 pt-0">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

defineOptions({
  name: 'UiCard'
})

const props = withDefaults(defineProps(), {
  variant: 'default',
  padding: true,
  hover: true
})

const cardClasses = computed(() => {
  const baseClasses = 'rounded-lg transition-all duration-200'

  const variantClasses = {
    default: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
    elevated: 'bg-white dark:bg-gray-800 shadow-md',
    outlined: 'border-2 border-gray-200 dark:border-gray-700'
  }

  const hoverClasses = props.hover
    ? 'hover:shadow-lg hover:-translate-y-0.5'
    : ''

  return [
    baseClasses,
    variantClasses[props.variant],
    hoverClasses
  ].filter(Boolean).join(' ')
})

const contentClasses = computed(() => {
  return props.padding ? 'p-6' : ''
})
</script>
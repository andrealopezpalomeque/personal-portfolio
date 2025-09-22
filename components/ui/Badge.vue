<template>
  <span :class="badgeClasses">
    <slot />
  </span>
</template>

<script setup>
import { computed } from 'vue'

defineOptions({
  name: 'UiBadge'
})

const props = defineProps({
  variant: {
    default: 'secondary'
  },
  size: {
    default: 'md'
  },
  outlined: {
    default: false
  }
})


const badgeClasses = computed(() => {
  const baseClasses = 'inline-flex items-center font-medium rounded-full transition-colors duration-200'

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-0.5 text-sm',
    lg: 'px-3 py-1 text-sm'
  }

  const variantClasses = {
    primary: props.outlined
      ? 'text-primary-700 bg-primary-50 border border-primary-200 dark:text-primary-300 dark:bg-primary-900/20 dark:border-primary-800'
      : 'text-primary-100 bg-primary-600',
    secondary: props.outlined
      ? 'text-gray-700 bg-gray-50 border border-gray-200 dark:text-gray-300 dark:bg-gray-800 dark:border-gray-600'
      : 'text-gray-100 bg-gray-600',
    success: props.outlined
      ? 'text-green-700 bg-green-50 border border-green-200 dark:text-green-300 dark:bg-green-900/20 dark:border-green-800'
      : 'text-green-100 bg-green-600',
    warning: props.outlined
      ? 'text-yellow-700 bg-yellow-50 border border-yellow-200 dark:text-yellow-300 dark:bg-yellow-900/20 dark:border-yellow-800'
      : 'text-yellow-100 bg-yellow-600',
    error: props.outlined
      ? 'text-red-700 bg-red-50 border border-red-200 dark:text-red-300 dark:bg-red-900/20 dark:border-red-800'
      : 'text-red-100 bg-red-600',
    info: props.outlined
      ? 'text-blue-700 bg-blue-50 border border-blue-200 dark:text-blue-300 dark:bg-blue-900/20 dark:border-blue-800'
      : 'text-blue-100 bg-blue-600'
  }

  return [
    baseClasses,
    sizeClasses[props.size],
    variantClasses[props.variant]
  ].join(' ')
})
</script>
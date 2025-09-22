<template>
  <component
    :is="tag"
    :href="href"
    :to="to"
    :target="target"
    :rel="rel"
    :disabled="disabled || loading"
    :class="buttonClasses"
    @click="handleClick"
  >
    <IconSvgSpinners8DotsRotate
      v-if="loading"
      class="w-4 h-4 mr-2"
    />
    <Icon
      v-else-if="icon"
      :icon="icon"
      class="w-4 h-4 mr-2"
    />
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import IconSvgSpinners8DotsRotate from '~icons/svg-spinners/8-dots-rotate'

defineOptions({
  name: 'UiButton'
})

const props = defineProps({
  variant: {
    default: 'primary'
  },
  size: {
    default: 'md'
  },
  href: {
    default: ''
  },
  to: {
    default: ''
  },
  target: {
    default: ''
  },
  rel: {
    default: ''
  },
  disabled: {
    default: false
  },
  loading: {
    default: false
  },
  icon: {
    default: ''
  }
})

const emit = defineEmits(['click'])

const tag = computed(() => {
  if (props.href) return 'a'
  if (props.to) return 'NuxtLink'
  return 'button'
})

const buttonClasses = computed(() => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed'

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  }

  const variantClasses = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500',
    secondary: 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 focus:ring-gray-500',
    outline: 'border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 focus:ring-primary-500',
    ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 focus:ring-primary-500'
  }

  return [
    baseClasses,
    sizeClasses[props.size],
    variantClasses[props.variant]
  ].join(' ')
})


const handleClick = (event) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>
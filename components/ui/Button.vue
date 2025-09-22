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
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed'

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  }

  const variantClasses = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border border-border bg-background hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline'
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
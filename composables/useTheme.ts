import { readonly } from 'vue'

export const useTheme = () => {
  const isDark = useCookie('theme-dark', {
    default: () => true // Default to dark theme
  })

  const toggleTheme = () => {
    isDark.value = !isDark.value
    applyTheme()
  }

  const applyTheme = () => {
    if (typeof window !== 'undefined') {
      if (isDark.value) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }

  const initTheme = () => {
    if (typeof window !== 'undefined') {
      // Only apply the saved theme preference, don't override it
      applyTheme()
    }
  }

  return {
    isDark: readonly(isDark),
    toggleTheme,
    initTheme
  }
}
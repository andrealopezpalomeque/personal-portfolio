import { readonly } from 'vue'

export const useTheme = () => {
  const isDark = useCookie('theme-dark', {
    default: () => false
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
      // Check for system preference if no saved preference
      if (!useCookie('theme-dark').value) {
        isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
      }
      applyTheme()
    }
  }

  return {
    isDark: readonly(isDark),
    toggleTheme,
    initTheme
  }
}
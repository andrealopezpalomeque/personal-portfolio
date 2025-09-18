export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  imageUrl?: string
  featured: boolean
  completedDate: string // YYYY-MM format
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other'
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  icon?: string
}

export interface Experience {
  company: string
  position: string
  startDate: string // YYYY-MM format
  endDate?: string // YYYY-MM format or 'Present'
  description: string[]
  technologies: string[]
}

export interface ContactInfo {
  email: string
  linkedin?: string
  github?: string
  twitter?: string
  location: string
}

export interface ThemeConfig {
  isDark: boolean
}

export interface SeoMeta {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
}
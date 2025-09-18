# Personal Portfolio - Project Instructions

## Project Overview
A clean, modern personal portfolio website to showcase my software development skills, projects, and professional experience.

## Tech Stack & Standards

### Core Technologies
- **Framework**: Nuxt 4 (Vue 3) for SSG/SSR capabilities
- **Package Manager**: yarn (NEVER npm)
- **Styling**: Tailwind CSS exclusively (NO custom CSS)
- **TypeScript**: Strict typing for all data structures
- **Icons**: Iconify (`~icons/pack-name/icon-name`)
- **Dates**: dayjs-nuxt for any date handling
- **Deployment**: Static site generation for optimal performance

### Required Dependencies
```json
{
  "dependencies": {
    "@nuxtjs/tailwindcss": "^6.12.3",
    "@vueuse/nuxt": "13.2.0",
    "nuxt": "^4.0.1",
    "tailwindcss": "^3.4.16",
    "unplugin-icons": "^0.21.0",
    "vue": "^3.5.17"
  },
  "devDependencies": {
    "@iconify/json": "^2.2.339",
    "@iconify/utils": "^2.3.0",
    "dayjs-nuxt": "^2.1.11"
  }
}
```

## Project Structure
```
/portfolio
├── CLAUDE.md (this file)
├── package.json
├── nuxt.config.ts
├── tailwind.config.js
├── /components
│   ├── /sections
│   │   ├── Hero.vue
│   │   ├── About.vue
│   │   ├── Projects.vue
│   │   ├── Skills.vue
│   │   └── Contact.vue
│   └── /ui
│       ├── Button.vue
│       ├── Card.vue
│       └── Badge.vue
├── /pages
│   └── index.vue
├── /assets
│   └── /images
├── /public
└── /types
    └── index.ts
```

## Data Structures

### Core Types
```typescript
interface Project {
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

interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other'
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
}

interface Experience {
  company: string
  position: string
  startDate: string // YYYY-MM format
  endDate?: string // YYYY-MM format or 'Present'
  description: string[]
  technologies: string[]
}

interface ContactInfo {
  email: string
  linkedin?: string
  github?: string
  twitter?: string
  location: string
}
```

## Design Philosophy

### Core Principles
- **Clean & Minimal**: Focus on content, avoid visual clutter
- **Professional**: Suitable for potential employers and clients
- **Fast Loading**: Optimized for performance and SEO
- **Mobile-First**: Responsive design across all devices
- **Accessible**: Proper contrast, semantic HTML, keyboard navigation

### Design Requirements
- **Modern Design**: Clean typography, subtle animations
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Fast Performance**: Static generation with optimal Core Web Vitals
- **SEO Optimized**: Proper meta tags, structured data, sitemap
- **Professional Branding**: Consistent color scheme and typography

## Development Standards

### Code Standards
- **Language**: Code & comments in English
- **TypeScript**: Strict typing required for all data
- **Styling**: Tailwind CSS only, no custom styles
- **Icons**: Iconify only (`~icons/` syntax)
- **Components**: Reusable, single-purpose components

### CSS & Styling Guidelines
- **MANDATORY**: Use Tailwind CSS classes exclusively
- **NO custom CSS**: Avoid inline styles or `<style>` blocks
- **Responsive Design**: Mobile-first with Tailwind responsive prefixes
- **Typography**: Consistent text scale and font weights
- **Color System**: Professional color palette with dark mode support
- **Animations**: Subtle transitions and hover effects

### Library Guidelines

**ALLOWED LIBRARIES ONLY**:
- **Iconify** - For all icons
- **Tailwind CSS** - For all styling
- **VueUse** - For Vue composition utilities
- **dayjs** - For date formatting (if needed)

**FORBIDDEN**:
- Additional UI libraries (Vuetify, Quasar, etc.)
- Additional icon libraries (Font Awesome, etc.)
- CSS frameworks beyond Tailwind
- Heavy animation libraries

## Git Setup & Deployment

### Initial Setup
1. **Project Creation**: Initialize Nuxt 4 project with TypeScript
2. **Git Repository**: Initialize git, create GitHub repo
3. **Dependencies**: Install required packages with yarn
4. **Basic Structure**: Create folder structure and base components
5. **Configuration**: Set up Nuxt config for SSG deployment

### Git Workflow
- **Main Branch**: `main` (production ready)
- **Development**: Feature branches for new sections/improvements
- **Commits**: Clear, descriptive commit messages
- **README**: Include project description, setup instructions, and live URL

### Deployment Strategy
- **Static Generation**: Build as static site for GitHub Pages or Netlify
- **Performance**: Optimize images, enable compression
- **Analytics**: Optional Google Analytics integration
- **Domain**: Custom domain setup (optional)

## Content Sections

### Required Pages/Sections
1. **Hero Section**: Name, title, brief intro, CTA buttons
2. **About**: Professional summary, background, interests
3. **Skills**: Technical skills organized by category
4. **Projects**: Featured projects with descriptions and links
5. **Experience**: Work history and achievements
6. **Contact**: Contact form and social links

### Content Guidelines
- **Professional Tone**: Clear, concise, and engaging copy
- **Results-Focused**: Highlight achievements and impact
- **Technical Details**: Showcase specific technologies and skills
- **Call-to-Actions**: Clear next steps for visitors
- **Regular Updates**: Easy to update with new projects and experience

## Development Priorities
1. **Project Setup**: Initialize repository and basic structure
2. **Core Layout**: Header, footer, and main content areas
3. **Hero Section**: Strong first impression with clear messaging
4. **Projects Showcase**: Dynamic project grid with filtering
5. **Responsive Design**: Mobile optimization and testing
6. **Performance**: Image optimization and loading speeds
7. **SEO**: Meta tags, structured data, and sitemap

---

**Next Steps**: Start with project initialization, Git setup, and basic Nuxt 4 structure with the essential sections outlined above.
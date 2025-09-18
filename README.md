# Personal Portfolio

A modern, responsive personal portfolio website built with Nuxt 4, Vue 3, TypeScript, and Tailwind CSS.

## ✨ Features

- **Modern Design**: Clean, professional design with dark/light mode support
- **Responsive**: Optimized for all devices and screen sizes
- **Performance**: Built with Nuxt 4 for optimal performance and SEO
- **TypeScript**: Fully typed for better development experience
- **Accessible**: Designed with accessibility in mind
- **Fast Loading**: Optimized for Core Web Vitals

## 🛠️ Tech Stack

- **Framework**: Nuxt 4 (Vue 3)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Iconify
- **Package Manager**: Yarn
- **Deployment**: Static Site Generation (SSG)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd portfolio
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development server:
```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn generate` - Generate static site
- `yarn preview` - Preview production build

## 🎨 Customization

### Personal Information

Update your personal information in the components:

- **Hero Section**: `components/sections/Hero.vue`
- **About Section**: `components/sections/About.vue`
- **Contact Information**: `components/sections/Contact.vue` and `components/TheFooter.vue`

### Projects

Add your projects by modifying the sample data in `components/sections/Projects.vue`.

### Skills

Update your skills in `components/sections/Skills.vue`.

### Colors & Styling

The design system uses Tailwind CSS with custom colors defined in `tailwind.config.js`. Modify the color palette to match your brand.

### SEO

Update SEO meta tags in `pages/index.vue` and `nuxt.config.ts`.

## 📁 Project Structure

```
/
├── components/
│   ├── sections/          # Page sections (Hero, About, Skills, etc.)
│   ├── ui/               # Reusable UI components
│   ├── TheHeader.vue     # Site header with navigation
│   └── TheFooter.vue     # Site footer
├── composables/          # Vue composables
├── layouts/              # Nuxt layouts
├── pages/               # Nuxt pages
├── types/               # TypeScript type definitions
├── assets/              # Static assets
├── public/              # Public files
└── CLAUDE.md           # Development instructions
```

## 🌐 Deployment

This project is configured for static site generation. You can deploy to:

- **Netlify**: Connect your GitHub repository
- **Vercel**: Import your repository
- **GitHub Pages**: Use the `yarn generate` command
- **Any static hosting provider**

### Build Commands

```bash
# Generate static files
yarn generate

# The built files will be in the .output/public directory
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

- **Email**: andrealopezpalomeque@gmail.com
- **LinkedIn**: [My LinkedIn](https://www.linkedin.com/in/andrea-victoria-lopez-palomeque/)
- **GitHub**: [My GitHub](https://github.com/andrealopezpalomeque)

---

Built with ❤️ using Nuxt 4 and Tailwind CSS

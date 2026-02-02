# VashonMesh.github.io, aka VashonMesh.org

[VashonMesh.org](https://VashonMesh.org) Website Technical Notes

## Welcome

VashonMesh is a small group of rebels helping others connect to MeshCore and
related local area mesh networks. To visit the site go to
<https://VashonMesh.org>!

**This readme is not the site**, but introduces technology used to create
VashonMesh.org, and some of the features available to editors & the curious.

## Quick Feature Highlights

- 📱 Responsive design with hamburger menu for mobile
- 🌗 Dark mode with persistent toggle
- 📰 Full-featured news/blog system with search, tags, and author filtering
- 🗺️ SEO-optimized with sitemap and meta tags
- ⚡ Lightning-fast static site (Astro + Tailwind CSS)
- 🎨 Modern UI with gradient accents and smooth animations
- 📊 Version tracking across the site

## Astro

[Astro](https://astro.build) is the web framework used which

- builds to a static website with minimal Javascript
- makes it incredibly fast,
- free (aside from the domain registration & SSL certs),
- easily edited,
- pretty self-explanatory, and
- leveraging modern technologies.

## Project Structure

- See <https://docs.astro.build/en/basics/project-structure/> for details
- package.json - Astro dependencies and build scripts
- astro.config.mjs - Astro configuration for GitHub Pages
- index.astro - Homepage with VashonMesh branding and content
- Layout.astro - Base layout template
- favicon.svg - Custom mesh network icon
- .gitignore - Updated to ignore build artifacts and dependencies

## ✨ Features

### Core Features

- ⚡ **Astro-Powered** - Blazing fast static site generation with zero-JS output
  by default
- 🎨 **Beautiful Design** - Modern, clean layout with gradient hero sections and
  card-based content
- 📱 **Fully Responsive** - Mobile-first design with hamburger menu for small
  screens
- 🌗 **Dark Mode** - Native dark mode support with toggle switch and local
  storage persistence
- 🔄 **Smooth Navigation** - Client-side routing for seamless page transitions

### Navigation & UX

- 🍔 **Hamburger Menu** - Slide-in mobile menu with smooth animations and body
  scroll lock
- 📋 **Dropdown Menus** - Desktop hover dropdowns, mobile tap-to-expand with
  overview links
- 🎯 **Active States** - Visual indicators for current page across all
  navigation elements
- 🏠 **Smart Link Behavior** - Top-level items directly clickable on desktop,
  expandable on mobile
- 🎭 **Transparent Header** - Sticky header with backdrop blur for modern
  aesthetic

### Content Management

- 📝 **Content Collections** - Type-safe Markdown/MDX content with frontmatter
  validation
- 📰 **News/Blog System** - Full-featured blog with post listing, detail pages,
  and archives
- 🔍 **Advanced Search** - Real-time client-side search across titles,
  descriptions, tags, and authors
- 🏷️ **Tag System** - Categorize posts with tags, filterable sidebar with post
  counts
- 👤 **Author Management** - Track and filter by authors with dedicated author
  pages
- 📅 **Date Filtering** - Filter posts by month/year with human-readable labels
- 🖼️ **Image Support** - Featured images with automatic fallback gradients

### SEO & Performance

- 🗺️ **XML Sitemap** - Auto-generated sitemap with custom priorities and change
  frequencies
- 🤖 **Robots.txt** - Search engine optimization with sitemap reference
- 📊 **Version Tracking** - Unified version number across meta tags, footer, and
  about page
- 🔗 **Clean URLs** - SEO-friendly URL structure with proper routing
- ⚡ **Optimized Assets** - Image optimization and lazy loading for fast page
  loads

### Developer Experience

- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid styling
- 🔧 **TypeScript** - Full type safety across components and content
- 📦 **Modern Build** - Vite-powered builds with hot module replacement
- 🧩 **Component System** - Reusable Astro components with scoped styles
- 📚 **Documentation** - Comprehensive README, deployment guides, and inline
  comments

### Visual Polish

- ✨ **Glow Effects** - Dark mode glow effects on logos and interactive elements
- 🎨 **Gradient Accents** - Purple-to-blue gradient theme throughout the site
- 🔄 **Smooth Transitions** - CSS transitions on hover states and menu
  animations
- 🎭 **Custom Tooltips** - Branded tooltips with gradients and proper
  positioning
- 💫 **Hover Animations** - Scale and filter effects on interactive elements

## Technology Stack

- **Framework**: [Astro](https://astro.build) 6.0+ - Modern static site
  generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com) 4.0+ - Utility-first CSS
  framework
- **Language**: TypeScript - Type-safe development
- **Deployment**: GitHub Actions → GitHub Pages
- **Analytics**: GoatCounter (privacy-focused, open source)
- **Integrations**:
  - [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) -
    XML sitemap generation
  - Content Collections - Type-safe Markdown/MDX content management

## Versioning

The site uses semantic versioning (`MAJOR.MINOR.PATCH`) from `package.json`. The
version number is automatically displayed in:

- Meta tag in page head
- Footer (small text)
- About page
- Browser console (for developers)

Update version using npm:

```bash
npm version patch  # Bug fixes: 0.1.0 -> 0.1.1
npm version minor  # New features: 0.1.0 -> 0.2.0
npm version major  # Breaking changes: 0.1.0 -> 1.0.0
```

## Future

Potential enhancements under consideration:

- Easy content editing via CMS (Strapi, Sveltia CMS, or Sitepins)
- Additional integrations and features as community needs evolve

## Local Development

You can run locally (e.g., in Visual Studio Code) with:

```bash
npm run dev    # Start dev server
npm run build  # Build for production
```

## Deployment

**Important**: Changes must be merged to the `main` branch to appear on the live
site!

- GitHub Actions automatically builds and deploys when changes are pushed to
  `main`
- Deployments typically take 2-5 minutes to complete
- You can also manually trigger a deployment from the Actions tab

📖 **See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions on:**

- Why your changes aren't showing up
- How to get your changes to the live site
- How to force a manual build
- Troubleshooting deployment issues

This site is developed with the Astro framework, which basically allows pages to
be either MarkDown or straight HTML (but with an 'astro' file extension). If
modifying the site with Visual Studio Code, it is recommended to install the
official Astro extension
<https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode>
and
<https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode>
for TailwindCSS support.

## Performance Optimization

The site is configured for optimal performance with proper caching headers and asset optimization.

📖 **See [CACHE-OPTIMIZATION.md](CACHE-OPTIMIZATION.md) for:**

- How to improve cache lifetimes from 10 minutes to 1 year
- Migration options (Netlify, Vercel, or Cloudflare + GitHub Pages)
- Image optimization techniques to reduce file sizes by 75%+
- Expected performance gains (75% faster repeat visits, 91% less data transfer)

🚀 **See [NETLIFY-SETUP.md](NETLIFY-SETUP.md) for:**

- Step-by-step Netlify deployment guide (15 minutes)
- DNS configuration instructions
- Automatic deployment setup
- Performance comparison and benefits

Configuration files for Netlify and Vercel are already included and ready to use.

## Contributing

- [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)
- John Cornelison (aka Vashon Software) started this site in Jan 2026, but is
  counting on others to help flush it out and test, comment and promote it as
  anyone wants. Let me know if you want editing rights, a quick intro to the
  file structure, etc. This is NOT an individual effort!

## ToDo

- get approval for the site, ask for support
- get PugetMesh expert here for 2/12?
- Add basic content to pages
- figure out devices w/ links

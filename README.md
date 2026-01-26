# <VashonMesh.github.io>, aka <VashonMesh.org>

[VashonMesh.org](https://VashonMesh.org) Website Technical Notes

## Welcome

VashonMesh is a small group of rebels helping others connect to MeshCore and
related local area mesh networks.

Astro website project for VashonMesh. Here's what was set up:

## Project Structure

- See <https://docs.astro.build/en/basics/project-structure/> for details
- package.json - Astro dependencies and build scripts
- astro.config.mjs - Astro configuration for GitHub Pages
- index.astro - Homepage with VashonMesh branding and content
- Layout.astro - Base layout template
- favicon.svg - Custom mesh network icon
- .gitignore - Updated to ignore build artifacts and dependencies

## Features

- Modern, responsive design with gradient hero section
- Three content cards explaining VashonMesh and mesh networking
- Purple/blue color scheme
- Mobile-friendly layout
- GitHub Actions workflow automatically builds & deploys the site to
  https://vashonmesh.github.io/ when changes are published Uses
  https://www.goatcounter.com/ for open source analytics

## You can run locally (e.g., in Visual Studio Code) with

'''npm run dev''' - Start dev server

'''npm run build''' - Build for production

If committing changes to the GitHub repository, there is a github action to
automatically build and redeploy the site.

This site is developed with the Astro framework, which basically allows pages to
be either MarkDown or straight HTML (but with an 'astro' file extension). If
modifying the site with Visual Studio Code, it is recommended to install the
official Astro extension
(https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)
and https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode
for TailwindCSS support.

## Contributing

- John Cornelison started this site in Jan 2026, but is counting on others to
  help flush it out and test, comment and promote it as anyone wants. Let me
  know if you want editing rights, this is NOT an individual effort!

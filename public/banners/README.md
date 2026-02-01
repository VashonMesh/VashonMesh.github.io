# VashonMesh Banner Assets

This directory contains promotional banner assets for VashonMesh in various
sizes and formats.

## Directory Structure

```
public/banners/
├── README.md (this file)
├── vashonmesh-social-1200x630.png     # Social media sharing (Facebook, Twitter, LinkedIn)
├── vashonmesh-social-1200x630.webp
├── vashonmesh-leaderboard-728x90.png  # Standard web banner
├── vashonmesh-leaderboard-728x90.webp
├── vashonmesh-rectangle-300x250.png   # Medium rectangle (sidebar)
├── vashonmesh-rectangle-300x250.webp
├── vashonmesh-email-600x200.png       # Email header
└── vashonmesh-email-600x200.webp
```

## Banner Specifications

### Social Media Banner (1200×630px)

- **Purpose**: Open Graph/Twitter Card sharing
- **Use**: Facebook, Twitter, LinkedIn posts
- **Format**: PNG, WebP
- **Aspect Ratio**: 1.9:1
- **Recommended File Size**: < 100KB

### Web Leaderboard (728×90px)

- **Purpose**: Standard web banner
- **Use**: Website headers, blog posts
- **Format**: PNG, WebP
- **Aspect Ratio**: 8.09:1
- **Recommended File Size**: < 30KB

### Medium Rectangle (300×250px)

- **Purpose**: Content and sidebar banner
- **Use**: Website sidebars, content blocks
- **Format**: PNG, WebP
- **Aspect Ratio**: 1.2:1
- **Recommended File Size**: < 40KB

### Email Header (600×200px)

- **Purpose**: Email campaigns and newsletters
- **Use**: Email headers, newsletter banners
- **Format**: PNG, WebP
- **Aspect Ratio**: 3:1
- **Recommended File Size**: < 50KB

## Creating Banner Assets

### Design Guidelines

1. **Colors**: Use VashonMesh brand colors
   - Primary: #667eea (Purple-blue)
   - Secondary: #764ba2 (Deep purple)
   - Background: White or light gradients
   - Text: Dark gray (#1f2937) or white (on dark backgrounds)

2. **Typography**
   - Headline: "Rubik Maps" or bold sans-serif
   - Body: Clean sans-serif (Arial, Helvetica, or similar)
   - Maintain readability at all sizes

3. **Logo**
   - Include VashonMesh logo (from `/public/VashonMesh.svg`)
   - Ensure adequate spacing around logo
   - Logo should be prominent but not overwhelming

4. **Content Elements**
   - Tagline: "Connecting Vashon & Maury Islanders with Local Mesh Networks"
   - Website URL: vashonmesh.org
   - Optional: Icons representing connectivity, community, or technology

5. **Visual Style**
   - Gradient backgrounds (matching website aesthetic)
   - Floating device/connectivity imagery (optional)
   - Clean, modern design
   - High contrast for readability

### Tools for Creating Banners

- **Figma**: https://figma.com (recommended for design)
- **Canva**: https://canva.com (user-friendly templates)
- **GIMP**: https://gimp.org (free Photoshop alternative)
- **Photoshop**: Adobe's professional tool

### Export Settings

**PNG Format:**

```
- Color Mode: RGB
- Bit Depth: 8-bit
- Compression: 9 (maximum)
- Interlacing: None
- Background: Transparent or white
```

**WebP Format:**

```
- Quality: 85-90
- Method: 6 (best compression)
- Supports transparency
```

### Optimization

After creating banners, optimize them:

```bash
# Install tools
npm install -g sharp-cli

# Optimize PNG
npx @squoosh/cli --mozjpeg auto --webp '{"quality":85}' input.png

# Or use online tools:
# - TinyPNG: https://tinypng.com
# - Squoosh: https://squoosh.app
```

## Quick Start Template

To create banners quickly, use this template approach:

1. Start with the VashonMesh logo (SVG)
2. Add gradient background (135deg, #667eea to #764ba2)
3. Include tagline in white text
4. Add "vashonmesh.org" at bottom
5. Export at specified dimensions

### Figma Template (Recommended)

Create a Figma file with artboards for all banner sizes:

- Use component for logo (easy updates)
- Use styles for colors (consistency)
- Use auto-layout for responsive text

## Usage on Website

Banners are displayed on the `/banner` page with:

- Preview of each size
- Download buttons for PNG and WebP
- Usage guidelines
- HTML embed code
- SEO optimization

## Updating Banners

When updating banner designs:

1. Create new banner files following naming convention
2. Optimize for web (compress images)
3. Test on `banner.astro` page
4. Commit to git
5. Deploy (auto-deploys to GitHub Pages)

## License

These banner assets are part of the VashonMesh project and follow the same
license as the main repository. They are free to use for promoting VashonMesh
and community mesh networking initiatives.

## Questions?

For questions about banner assets or design guidelines, contact the VashonMesh
team via the [Contact page](https://vashonmesh.org/contact-us).

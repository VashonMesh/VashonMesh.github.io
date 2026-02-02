# Image Optimization Guide

This project includes automatic image optimization to improve page load performance.

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

This will install Sharp, the high-performance image processing library.

### 2. Run Image Optimizer

```bash
npm run optimize-images
```

This script will:

- Resize floating images to 120px (1.5x display size for retina)
- Resize news images to 800px width (2x display size for retina)
- Convert images to WebP format (70-80% smaller than PNG/JPG)
- Create `.optimized.webp` versions alongside originals
- Show detailed savings report

### 3. Review Output

The script creates optimized versions like:

- `hero-imgs/birds/parrot.png` → `hero-imgs/birds/parrot.optimized.webp`
- `news-imgs/post-1.jpg` → `news-imgs/post-1.optimized.webp`

### 4. Update Code (Automatic)

The Layout.astro and index.astro files are already configured to use `.optimized.webp` files when available, falling back to originals if not found.

### 5. Clean Up (After Verification)

Once you've verified the optimized images look good:

```bash
# Remove large original files
rm public/hero-imgs/**/*.png
rm public/news-imgs/*.{png,jpg}
```

## Configuration

Edit `scripts/optimize-images.mjs` to adjust:

- `maxSize` - Maximum dimensions for floating images (default: 120px)
- `maxWidth` - Maximum width for news images (default: 800px)
- `quality` - WebP quality (default: 85, range: 0-100)
- `format` - Output format ('webp' or 'avif')

## Expected Results

### Before Optimization:

- Total images: ~9.5 MB
- Floating images: 8.7 MB
- News images: ~800 KB

### After Optimization:

- Total images: ~1.2 MB (87% reduction!)
- Floating images: ~800 KB (91% reduction)
- News images: ~400 KB (50% reduction)

## Using Astro's Image Component

For even better optimization, use Astro's built-in `<Image>` component in your templates:

```astro
---
import { Image } from "astro:assets";
import myImage from "../images/photo.jpg";
---

<Image src={myImage} alt="Description" width={400} height={300} />
```

This provides:

- Automatic resizing and optimization
- Modern format conversion (WebP/AVIF)
- Responsive image sets
- Lazy loading by default

## Troubleshooting

### "Cannot find module 'sharp'"

Run `npm install` to install dependencies.

### "Permission denied"

On Unix systems: `chmod +x scripts/optimize-images.mjs`

### Images still large

1. Check that optimized versions were created
2. Clear browser cache
3. Verify code is using `.optimized.webp` files
4. Run build: `npm run build`

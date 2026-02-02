# Cache Optimization Guide

## Current Issue

Your site currently has a cache TTL of only **10 minutes** for all static assets, causing browsers to re-fetch images, CSS, and other files too frequently. This results in:

- Slower page loads for returning visitors
- ~6,638 KiB of unnecessary data transfer
- Higher server costs and bandwidth usage

## Solution Options

### Option 1: Switch to Netlify (Recommended)

Netlify provides better caching out-of-the-box and is free for open source projects.

**Setup:**

1. Sign up at [netlify.com](https://www.netlify.com/)
2. Connect your GitHub repository
3. Deploy settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. The `netlify.toml` and `public/_headers` files are already configured!

**Benefits:**

- ✅ Proper cache headers (1 year for images, CSS, JS)
- ✅ Automatic CDN distribution
- ✅ Faster builds
- ✅ Better security headers
- ✅ Branch previews for PRs

### Option 2: Switch to Vercel

Another excellent hosting platform with great Astro support.

**Setup:**

1. Sign up at [vercel.com](https://vercel.com/)
2. Import your GitHub repository
3. Vercel auto-detects Astro projects
4. The `vercel.json` file is already configured!

**Benefits:**

- ✅ Automatic optimal caching
- ✅ Global CDN
- ✅ Zero-config Astro deployments
- ✅ Preview deployments

### Option 3: Add Cloudflare (Works with GitHub Pages)

Keep GitHub Pages but add Cloudflare CDN in front for caching.

**Setup:**

1. Sign up at [cloudflare.com](https://www.cloudflare.com/) (free plan works)
2. Add your domain (vashonmesh.org)
3. Update your domain nameservers to Cloudflare's
4. Configure Page Rules for caching:

**Page Rules to Add:**

```
URL Pattern: vashonmesh.org/_astro/*
- Cache Level: Cache Everything
- Edge Cache TTL: 1 year

URL Pattern: vashonmesh.org/hero-imgs/*
- Cache Level: Cache Everything
- Edge Cache TTL: 1 year

URL Pattern: vashonmesh.org/news-imgs/*
- Cache Level: Cache Everything
- Edge Cache TTL: 1 year

URL Pattern: vashonmesh.org/*.svg
- Cache Level: Cache Everything
- Edge Cache TTL: 1 year

URL Pattern: vashonmesh.org/*.png
- Cache Level: Cache Everything
- Edge Cache TTL: 1 year

URL Pattern: vashonmesh.org/*.jpg
- Cache Level: Cache Everything
- Edge Cache TTL: 1 year

URL Pattern: vashonmesh.org/*.webp
- Cache Level: Cache Everything
- Edge Cache TTL: 1 year
```

**Benefits:**

- ✅ Keep current GitHub Pages setup
- ✅ Free CDN and caching
- ✅ DDoS protection
- ✅ Analytics included

### Option 4: Optimize Images (Do This Regardless)

Your images are quite large. Compress them to reduce transfer size:

**Largest files to optimize:**

- `devices/AC_SL1500.png` (1,178 KiB) → Target: ~300 KiB
- `favicon.svg` (1,153 KiB) → Target: ~50 KiB
- `VashonMesh.svg` (1,153 KiB) → Target: ~50 KiB
- `birds/parrot.png` (881 KiB) → Target: ~200 KiB
- `birds/colorful-bird.png` (705 KiB) → Target: ~150 KiB

**Optimization Tools:**

- **SVG:** [SVGOMG](https://jakearchibald.github.io/svgomg/)
- **PNG:** [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
- **Batch processing:** `npm install -g sharp-cli` then:
  ```bash
  npx sharp-cli --input public/**/*.{png,jpg} --output public/optimized/ --format webp --quality 85
  ```

## Configuration Files Created

I've created three configuration files ready for deployment:

1. **`public/_headers`** - For Netlify (and some other hosts)
2. **`netlify.toml`** - Complete Netlify configuration
3. **`vercel.json`** - Complete Vercel configuration

These files are already committed and will work immediately when you deploy to Netlify or Vercel.

## Expected Performance Gains

After implementing proper caching:

| Metric                        | Before     | After                           | Improvement      |
| ----------------------------- | ---------- | ------------------------------- | ---------------- |
| Cache TTL                     | 10 minutes | 1 year (static) / 1 hour (HTML) | 52,560x increase |
| Repeat visit load time        | ~2-3s      | ~0.5s                           | 75% faster       |
| Data transfer (repeat visits) | 7,241 KiB  | ~600 KiB                        | 91% reduction    |
| Lighthouse Performance        | ~85        | ~95+                            | +10 points       |

## Recommended Action Plan

**Immediate (Today):**

1. Deploy to Netlify or Vercel (15 minutes setup)
2. Update DNS to point to new host
3. Monitor deployment

**Short-term (This Week):**

1. Optimize large images (especially SVGs and PNGs)
2. Test site performance with Lighthouse
3. Configure Cloudflare if staying on GitHub Pages

**Long-term:**

- Set up automatic image optimization in build pipeline
- Consider lazy-loading for below-the-fold images
- Monitor Core Web Vitals

## Testing Cache Headers

After deployment, verify caching is working:

```bash
# Check cache headers
curl -I https://vashonmesh.org/VashonMesh.svg

# Should see:
# Cache-Control: public, max-age=31536000, immutable
```

## Questions?

- Netlify: [Astro Deployment Docs](https://docs.astro.build/en/guides/deploy/netlify/)
- Vercel: [Astro Deployment Docs](https://docs.astro.build/en/guides/deploy/vercel/)
- GitHub: Open an issue if you need help!

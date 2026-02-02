# Netlify Deployment Guide

## Quick Start (15 minutes)

Your site is ready to deploy to Netlify! All configuration files are already set up.

## Step 1: Sign Up for Netlify

1. Go to [https://www.netlify.com/](https://www.netlify.com/)
2. Click **"Sign up"** (top right)
3. Choose **"Sign up with GitHub"** (easiest option)
4. Authorize Netlify to access your GitHub account

## Step 2: Import Your Repository

1. After signing in, click **"Add new site"** → **"Import an existing project"**
2. Click **"Deploy with GitHub"**
3. Find and select **"VashonMesh/VashonMesh.github.io"**
4. Netlify will auto-detect the Astro project

## Step 3: Configure Build Settings

Netlify should auto-detect these settings (verify they match):

```
Build command: npm run build
Publish directory: dist
```

**Click "Deploy site"** - That's it!

## Step 4: Wait for Deployment

- First deployment takes about 3-4 minutes (includes plugin installation)
- Build plugins will install automatically:
  - Image optimization plugin will process all images
  - Link checker will scan for broken links
  - Lighthouse will measure performance
- You'll see a build log showing progress
- When complete, you'll get a temporary URL like: `random-name-123456.netlify.app`

**Note**: First build is slower due to plugin installation. Subsequent builds will be faster (~1-2 minutes).

## Step 5: Set Up Custom Domain

### Option A: Use Your Existing Domain (vashonmesh.org)

1. In Netlify dashboard, go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter `vashonmesh.org`
4. Netlify will provide DNS instructions (see below)

### Option B: Use Free Netlify Subdomain

1. Go to **Site settings** → **Domain management**
2. Click **"Options"** → **"Edit site name"**
3. Change from `random-name-123456` to `vashonmesh`
4. Your site will be at: `vashonmesh.netlify.app`

## Step 6: Update DNS (If Using Custom Domain)

You have two options for DNS configuration:

### Option A: Use Netlify DNS (Recommended - Easiest)

1. Netlify will show you nameservers like:

   ```
   dns1.p03.nsone.net
   dns2.p03.nsone.net
   dns3.p03.nsone.net
   dns4.p03.nsone.net
   ```

2. Go to your domain registrar (wherever you bought vashonmesh.org)
3. Find DNS/Nameserver settings
4. Replace existing nameservers with Netlify's nameservers
5. Save changes (can take 24-48 hours to propagate, usually faster)

### Option B: Keep Current DNS Provider

Add these DNS records at your current DNS provider:

**For apex domain (vashonmesh.org):**

```
Type: A
Name: @
Value: 75.2.60.5
TTL: 3600
```

**For www subdomain:**

```
Type: CNAME
Name: www
Value: vashonmesh.netlify.app
TTL: 3600
```

## Step 7: Enable HTTPS

1. After DNS propagates, go to **Site settings** → **Domain management** → **HTTPS**
2. Click **"Verify DNS configuration"**
3. Click **"Provision certificate"**
4. SSL certificate will be ready in 1-2 minutes

## Step 8: Verify Cache Headers

After deployment, test that caching is working:

```bash
# Test in PowerShell
curl -I https://vashonmesh.netlify.app/VashonMesh.svg
```

You should see:

```
Cache-Control: public, max-age=31536000, immutable
```

## What Happens Next?

### Automatic Deployments

Every time you push to the `main` branch:

1. GitHub triggers Netlify automatically
2. Netlify builds your site
3. New version goes live in 2-3 minutes
4. No manual deployment needed!

### Build Status

- View build logs: Netlify dashboard → **Deploys** tab
- Get email notifications for failed builds
- See deployment preview URLs for every commit

### Plugin Results

After each deploy, check plugin results in the build log:

**Lighthouse scores** - Click "Plugin: @netlify/plugin-lighthouse" to see:

- Performance, Accessibility, Best Practices, SEO scores
- Detailed recommendations for improvements

**Image optimization** - Look for "Plugin: netlify-plugin-image-optim":

- Shows how much each image was reduced
- Total space saved

**Link checker** - Search for "Plugin: netlify-plugin-checklinks":

- Lists any broken internal links found
- Green = no broken links!

## Bonus Features Included

✅ **Global CDN** - Your site loads fast worldwide
✅ **Automatic HTTPS** - Free SSL certificates
✅ **Cache Optimization** - 1-year cache for static assets (already configured!)
✅ **Branch Previews** - Test changes before merging to main
✅ **Rollback** - One-click rollback to previous deployments
✅ **Forms** - Can add contact forms easily (Netlify Forms)
✅ **Functions** - Can add serverless functions if needed later

### Pre-configured Build Plugins

Your `netlify.toml` includes these optimization plugins:

1. **@netlify/plugin-lighthouse** - Monitors performance scores on each deploy
2. **netlify-plugin-image-optim** - Automatically optimizes images (70-80% size reduction!)
3. **netlify-plugin-checklinks** - Finds broken internal links
4. **netlify-plugin-cache** - Speeds up builds by caching dependencies

These will install automatically on first deploy - no action needed!

**Expected benefits:**

- Images reduced from 7,241 KiB to ~1,800 KiB (75% smaller!)
- Build time: ~2 minutes → ~1 minute (after first build)
- No broken links on production
- Performance scores tracked on every deploy

## Comparing Before & After

| Metric               | GitHub Pages (Before)   | Netlify (After)           |
| -------------------- | ----------------------- | ------------------------- |
| Cache TTL            | 10 minutes              | 1 year                    |
| Image sizes          | 7,241 KiB (unoptimized) | ~1,800 KiB (optimized)    |
| First load           | ~3-4 seconds            | ~1-2 seconds              |
| Repeat visits        | ~2-3 seconds            | ~0.5 seconds              |
| Build time           | 2-5 minutes             | 1-2 minutes (after first) |
| CDN                  | Limited                 | Global                    |
| HTTPS Setup          | Manual                  | Automatic                 |
| Branch Previews      | No                      | Yes                       |
| Build Notifications  | No                      | Email + Slack             |
| Image optimization   | Manual                  | Automatic                 |
| Link checking        | Manual                  | Automatic                 |
| Performance tracking | Manual                  | Every deploy              |

## Troubleshooting

### Build Fails

Check the build log in Netlify dashboard. Common issues:

- Dependencies not installed: Usually auto-fixed by Netlify
- Build command wrong: Should be `npm run build`
- Environment variables: Add in Site settings → Build & deploy

### DNS Not Working

- Wait 24-48 hours for DNS propagation
- Use [DNS Checker](https://dnschecker.org/) to verify changes
- Make sure you updated nameservers at your registrar, not just DNS records

### Site Shows Old Content

Clear cache:

```bash
# In Netlify dashboard
Deploys → Trigger deploy → Clear cache and deploy site
```

## GitHub Pages Cleanup (Optional)

Once Netlify is working, you can disable GitHub Pages:

1. Go to repository **Settings** → **Pages**
2. Under "Source", select **"None"**
3. Save

Or keep both running during transition period!

## Next Steps

1. **Update Links**: If you used the GitHub Pages URL anywhere, update to new Netlify URL
2. **Monitor Performance**: Use Lighthouse to verify improvements
3. **Set Up Notifications**: Add build notifications in Netlify settings
4. **Explore Analytics**: Netlify provides free analytics (or keep GoatCounter)
5. **Review Plugin Results**: Check image optimization and link checker output in build logs

## Optional: Add More Plugins Later

Want even more features? Add these to `netlify.toml`:

### Accessibility Auditing

```toml
[[plugins]]
  package = "@netlify/plugin-a11y"
  [plugins.inputs]
    checkPaths = ['/', '/vashon-mesh', '/mesh-tech']
```

### Sitemap Submission to Google/Bing

```toml
[[plugins]]
  package = "@netlify/plugin-sitemap"
  [plugins.inputs]
    exclude = ['/admin/**', '/news/readme.*']
```

### Security Headers Check

```toml
[[plugins]]
  package = "netlify-plugin-security-headers"
```

### Bundle Size Analysis

```toml
[[plugins]]
  package = "netlify-plugin-bundle-size"
```

Then commit and push - Netlify will auto-install on next deploy!

## Getting Help

- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com/)
- **Astro + Netlify Guide**: [docs.astro.build/en/guides/deploy/netlify/](https://docs.astro.build/en/guides/deploy/netlify/)
- **Netlify Support**: Free community support forum

## Cost

**Free Plan Includes:**

- 100 GB bandwidth/month (way more than you need)
- 300 build minutes/month (you'll use ~6 minutes/month)
- Unlimited sites
- SSL certificates
- CDN
- Form submissions

You won't need to pay anything unless you get millions of visitors!

---

**Ready to deploy?** Start with Step 1 above! 🚀

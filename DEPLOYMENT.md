# Deployment Guide for VashonMesh.org

## Why aren't my changes showing up on the site?

The VashonMesh.org website is hosted on GitHub Pages and uses GitHub Actions to
automatically build and deploy the site. However, **deployments only happen when
changes are pushed to the `main` branch**.

If you've made changes on a different branch (like a feature branch or pull
request branch), those changes won't appear on the live site until they're
merged into `main`.

## How the Deployment Process Works

1. **Automatic Deployment**:
   - The site automatically rebuilds and deploys when changes are pushed to the
     `main` branch
   - The deployment workflow is defined in `.github/workflows/deploy.yml`
   - It typically takes 2-5 minutes for changes to appear on the live site

2. **Manual Deployment**:
   - You can also trigger a deployment manually using GitHub's workflow_dispatch
     feature
   - See the "How to Force a Build" section below

## Getting Your Changes to the Live Site

### Option 1: Merge to Main (Recommended)

If you're working on a feature branch or pull request:

1. **Commit your changes** (if not already committed):

   ```bash
   git add .
   git commit -m "Description of your changes"
   git push
   ```

2. **Open a Pull Request** on GitHub:
   - Go to https://github.com/VashonMesh/VashonMesh.github.io/pulls
   - Click "New Pull Request"
   - Select your branch and `main` as the base branch
   - Review the changes and create the PR

3. **Merge the Pull Request**:
   - Once reviewed and approved, merge the PR into `main`
   - The deployment will start automatically within seconds
   - Wait 2-5 minutes for the site to update

### Option 2: Push Directly to Main (Use with Caution)

If you have permission and are confident in your changes:

```bash
# Make sure you're on the main branch
git checkout main

# Pull the latest changes
git pull origin main

# Merge your feature branch (replace 'your-branch-name')
git merge your-branch-name

# Push to trigger deployment
git push origin main
```

**⚠️ Warning**: Pushing directly to `main` bypasses code review. It's better to
use pull requests.

## How to Force a Build

If you need to trigger a deployment manually (for example, to rebuild the site
without making code changes):

### Using GitHub Web Interface:

1. Go to https://github.com/VashonMesh/VashonMesh.github.io/actions
2. Click on "Deploy to GitHub Pages" in the workflows list
3. Click the "Run workflow" button (on the right side)
4. Select the `main` branch
5. Click the green "Run workflow" button

### Using GitHub CLI (gh):

```bash
gh workflow run deploy.yml --ref main
```

## Checking Deployment Status

### View Recent Deployments:

1. Go to https://github.com/VashonMesh/VashonMesh.github.io/actions
2. Look for "Deploy to GitHub Pages" workflow runs
3. Green checkmark ✓ = successful deployment
4. Red X ✗ = failed deployment (click to see error logs)

### Common Deployment Times:

- **Build time**: 1-3 minutes
- **Deployment time**: 1-2 minutes
- **DNS propagation**: Instant to a few minutes
- **Total time**: Usually 2-5 minutes

## Troubleshooting

### Changes still not showing up after merging to main?

1. **Check the workflow status**:
   - Go to https://github.com/VashonMesh/VashonMesh.github.io/actions
   - Verify the latest workflow run completed successfully

2. **Clear your browser cache**:
   - Press `Ctrl+F5` (Windows/Linux) or `Cmd+Shift+R` (Mac)
   - Or open the site in an incognito/private browsing window

3. **Check if you're on the right branch**:

   ```bash
   git branch --show-current
   ```

   - If not on `main`, your changes aren't deployed yet

4. **Verify your changes were pushed**:
   ```bash
   git status
   git log --oneline -5
   ```

### Build is failing?

1. **Test locally first**:

   ```bash
   npm run build
   ```

   - Fix any errors before pushing

2. **Check the build logs**:
   - Go to the failed workflow run on GitHub Actions
   - Click on the "build" job to see detailed error messages

3. **Common issues**:
   - TypeScript errors: Run `npm run astro check` locally
   - Missing dependencies: Run `npm install`
   - Syntax errors in `.astro`, `.md`, or config files

## Development Workflow

Recommended workflow for making changes:

1. **Create a feature branch**:

   ```bash
   git checkout -b feature/my-changes
   ```

2. **Make your changes and test locally**:

   ```bash
   npm run dev  # Test in development mode
   npm run build  # Verify it builds successfully
   ```

3. **Commit and push**:

   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin feature/my-changes
   ```

4. **Create a Pull Request** on GitHub

5. **After merge**: Deployment happens automatically!

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

## Quick Reference

| Action                | Command/Steps                                                    |
| --------------------- | ---------------------------------------------------------------- |
| Check current branch  | `git branch --show-current`                                      |
| Switch to main        | `git checkout main`                                              |
| Update main branch    | `git pull origin main`                                           |
| Merge feature to main | `git checkout main && git merge feature/branch-name && git push` |
| Force rebuild         | Go to Actions → Deploy to GitHub Pages → Run workflow            |
| View deployment logs  | https://github.com/VashonMesh/VashonMesh.github.io/actions       |
| Live site             | https://vashonmesh.github.io/                                    |

## Need Help?

- Review the main [README.md](README.md) for development setup
- Check [Astro documentation](https://docs.astro.build)
- Open an issue if you encounter problems

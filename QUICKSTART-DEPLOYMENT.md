# Quick Start: Deploying Your Changes

## 🚀 TL;DR

**Your changes won't show up on https://vashonmesh.github.io/ unless they're on the `main` branch!**

## Fast Track: Get Your Changes Live

### Step 1: Check your current branch
```bash
git branch --show-current
```

### Step 2a: If you're NOT on `main` - Create a Pull Request
1. Go to https://github.com/VashonMesh/VashonMesh.github.io/pulls
2. Click "New Pull Request"
3. Merge it to `main`
4. ✅ Done! Site updates automatically in 2-5 minutes

### Step 2b: If you ARE on `main` - Just push
```bash
git push origin main
```
✅ Done! Site updates automatically in 2-5 minutes

## 🔨 Force a Manual Build

Already merged to `main` but want to rebuild?

1. Go to https://github.com/VashonMesh/VashonMesh.github.io/actions
2. Click "Deploy to GitHub Pages"
3. Click "Run workflow" button
4. Select `main` branch
5. Click green "Run workflow" button

## 🔍 Check Deployment Status

Watch the build: https://github.com/VashonMesh/VashonMesh.github.io/actions

- ✓ Green = Success
- ✗ Red = Failed (click to see logs)

## 📚 Need More Help?

See [DEPLOYMENT.md](DEPLOYMENT.md) for the complete guide with troubleshooting tips.

## Common Commands

```bash
# See what branch you're on
git branch --show-current

# Switch to main
git checkout main

# Get latest changes
git pull origin main

# View recent commits
git log --oneline -5

# Check status
git status
```

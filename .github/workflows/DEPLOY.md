# GitHub Deployment Guide

## Quick Setup for GitHub Pages

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll to "Pages" section
   - Source: "GitHub Actions"
    - The workflow will build and upload the site, then deploy it using the official GitHub Pages action on every push to main
    - Pull requests build only; they do not deploy
    - To retry manually, open Actions → Deploy to GitHub Pages → Run workflow

3. **Local Development**:
   ```bash
    npm ci
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   npm run preview
   ```

## Project Structure
- **Vite + React + TypeScript**
- **Tailwind CSS** for styling
- **Shadcn/ui** components
- **Responsive design** with mobile-first approach

## Dependency Updates
- Use Node.js 22 (matching the GitHub workflow).
- When dependencies change, update and include `package-lock.json` along with `package.json`. GitHub uses `npm ci`, which requires both files to agree.
- The production base path is `/mydla-merak/`. If the repository is renamed or Pages uses a root custom domain, update `base` in `vite.config.ts` to match.

## Environment Variables
If you need environment variables, create a `.env` file in the root:
```
VITE_API_URL=your_api_url_here
```

## Troubleshooting
- Make sure Node.js version is 22
- If `npm ci` reports a mismatched lockfile, synchronize `package-lock.json` and include it in the repository
- For a Pages deployment error, confirm Settings → Pages → Source is GitHub Actions
- If build fails, check for TypeScript errors
- For deployment issues, check GitHub Actions logs

Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`
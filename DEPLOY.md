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
   - The workflow will automatically deploy on every push to main

3. **Local Development**:
   ```bash
   npm install
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

## Environment Variables
If you need environment variables, create a `.env` file in the root:
```
VITE_API_URL=your_api_url_here
```

## Troubleshooting
- Make sure Node.js version is 18+
- If build fails, check for TypeScript errors
- For deployment issues, check GitHub Actions logs

Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`
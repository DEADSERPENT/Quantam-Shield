# Production Deployment Guide

## The Issue
Your site was showing development-mode content (HMR client, Turbopack dev scripts, debug info) in production because it was running with `npm run dev`.

## Correct Production Deployment

### 1. Build for Production
```bash
npm run build
```

This command:
- Creates an optimized production build in `.next` folder
- Removes all development tools and debugging code
- Minifies and optimizes JavaScript and CSS
- Generates static assets

### 2. Start Production Server
```bash
npm start
```

This serves your optimized production build.

---

## For Different Hosting Platforms

### Vercel (Recommended for Next.js)
1. Push your code to GitHub
2. Import project to Vercel
3. Vercel automatically:
   - Runs `npm run build`
   - Serves with `npm start`

**No configuration needed** - Vercel detects Next.js automatically.

### Netlify
Add this file: `netlify.toml`
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Docker
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### Traditional Server (VPS/Cloud)
```bash
# Install dependencies
npm ci --only=production

# Build
npm run build

# Start with PM2 (recommended)
npm install -g pm2
pm2 start npm --name "quantumshield" -- start

# Or start directly
npm start
```

---

## Environment Variables

For production, set:
```bash
NODE_ENV=production
```

This ensures Next.js runs in production mode.

---

## Testing Production Build Locally

```bash
# Build
npm run build

# Start production server
npm start

# Your site will run at http://localhost:3000
```

The HTML will no longer contain:
- ❌ Turbopack HMR scripts
- ❌ Development devtools
- ❌ Local file paths
- ❌ Debug information

Instead, you'll get:
- ✅ Minified, optimized code
- ✅ Production-ready assets
- ✅ Fast load times
- ✅ SEO-friendly HTML

---

## Quick Fix

**Stop your current server** and run:
```bash
npm run build && npm start
```

Your site will now be in production mode!

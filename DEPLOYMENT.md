# Deployment Guide - Nidhi's Birthday Card

## Quick Deploy on Replit

1. **Automatic Deployment**
   - Click the "Deploy" button in Replit interface
   - Replit will automatically build and host the application
   - You'll receive a public URL like: `https://[project-name].replit.app`

2. **Manual Build Process**
   ```bash
   npm run build
   npm run start
   ```

## GitHub Repository Setup

To push this project to GitHub:

1. **Create New Repository**
   ```bash
   # On GitHub, create a new repository named "nidhi-birthday-card"
   ```

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Complete birthday card with photos and night theme"
   git branch -M main
   git remote add origin https://github.com/[username]/nidhi-birthday-card.git
   git push -u origin main
   ```

## Environment Variables for Production

Set these in your deployment platform:

```
DATABASE_URL=your_production_database_url
NODE_ENV=production
```

## File Structure for GitHub

All essential files included:
- Source code (client/, server/, shared/)
- Configuration files (package.json, tsconfig.json, etc.)
- Assets (public/images/nidhi/)
- Documentation (README.md, this file)

## URLs and Access

- **Development**: `http://localhost:5000`
- **Replit Deployment**: `https://[project-name].replit.app`
- **Custom Domain**: Can be configured in Replit settings

## Sharing the Card

Once deployed, the birthday card will be accessible from any device worldwide via the public URL. Perfect for sharing Nidhi's special birthday card with family and friends.
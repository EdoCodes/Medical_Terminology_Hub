# Netlify Deployment Guide

## Quick Deploy to Netlify

### Option 1: Connect GitHub Repository (Recommended)

1. **Go to Netlify**: Visit [netlify.com](https://netlify.com) and sign in
2. **New Site from Git**: Click "New site from Git"
3. **Connect to GitHub**: Authorize Netlify to access your GitHub account
4. **Select Repository**: Choose `Medical_Terminology_Hub` repository
5. **Configure Build Settings**:
   - **Build command**: `npm run build` (or will auto-detect from netlify.toml)
   - **Publish directory**: `dist`
   - **Node version**: `18` (automatically set from netlify.toml)
6. **Deploy**: Click "Deploy site"

### Option 2: Manual Deploy

1. **Build locally**:
   ```bash
   npm install
   npm run build
   ```
2. **Upload dist folder**: Drag and drop the `dist` folder to Netlify

## Build Configuration

The project includes:
- ✅ `netlify.toml` - Netlify configuration
- ✅ `public/_redirects` - URL redirects for SPA behavior
- ✅ Static build output (`output: 'static'` in astro.config.mjs)
- ✅ 404.astro page for error handling
- ✅ robots.txt and sitemap.xml for SEO

## Environment Variables

No environment variables are required for the basic deployment.

## Post-Deployment Steps

1. **Custom Domain** (Optional): Configure your custom domain in Netlify settings
2. **Update URLs**: Replace placeholder URLs in sitemap.xml with your actual Netlify URL
3. **Admin Access**: Admin login is available at `/admin/login` (credentials: admin/medical2024)

## Features Included

- ✅ Traditional college-ruled flashcards
- ✅ Interactive carousel with shuffle functionality  
- ✅ Enhanced search and filtering
- ✅ Blog section with medical articles
- ✅ Admin content management system
- ✅ Mobile-responsive design
- ✅ SEO optimization
- ✅ Performance optimized assets

## Performance Features

- Static site generation for fast loading
- Optimized images and assets
- CSS and JS minification
- Proper caching headers
- Lighthouse score ready

## Support

For issues or questions:
- Check the GitHub repository issues
- Review the code documentation
- Contact support at the admin panel

---

**Note**: This is a static site that will work perfectly on Netlify's free tier.